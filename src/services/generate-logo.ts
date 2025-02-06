import { FormLogoValues } from "@/global.types";
import { serverConfig } from "@/lib/config.server";

const generatePrompt = (values: FormLogoValues): string => {
  const prompts = [
    "You are a logo designer. Your task is to create a logo with these specifications:",
    `logo_name=${values.name}`,
    `logo_description=${values.description}`,
    `logo_style=${values.style}`,
  ];
  if (values.colors.length !== 0) {
    prompts.push(`colors=${values.colors}`);
  }
  return prompts.join(" ");
};

const convertToBase64Image = (base64ImageData: string) => {
  return `data:image/png;base64,${base64ImageData}`;
};

const generateLogoWithTogether = async (prompt: string) => {
  const payload = {
    model: "black-forest-labs/FLUX.1-schnell-Free",
    prompt: prompt,
    width: 1440,
    height: 1440,
    steps: 4,
    n: 1,
    response_format: "b64_json",
  };
  const response = await fetch(
    "https://api.together.xyz/v1/images/generations",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${serverConfig.togetherApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  const jsonResponse: {
    data?: { b64_json: string }[];
    error?: { message: string };
  } = await response.json();
  if (jsonResponse.data) {
    return convertToBase64Image(jsonResponse.data[0].b64_json);
  }
  console.error("Together error", jsonResponse.error);
  throw new Error("failed generate with together");
};

const generateLogoWithHF = async (prompt: string) => {
  const payload = {
    inputs: prompt,
    parameters: {
      num_inference_steps: 4,
    },
  };
  const response = await fetch(
    "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-schnell",
    {
      headers: {
        Authorization: `Bearer ${serverConfig.hfToken}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(payload),
    }
  );
  const arrayBuffer = await response.arrayBuffer();
  if (!response.ok) {
    const text = Buffer.from(arrayBuffer).toString("utf-8");
    console.error("HF ERROR: ", text);
    throw new Error("failed generate logo with HF");
  }
  const base64Data = Buffer.from(arrayBuffer).toString("base64");
  return convertToBase64Image(base64Data);
};

export const generateLogo = async (values: FormLogoValues): Promise<string> => {
  const prompt = generatePrompt(values);
  try {
    return await generateLogoWithTogether(prompt);
  } catch (e) {
    console.error("Together Failed:", e);
    return await generateLogoWithHF(prompt);
  }
};
