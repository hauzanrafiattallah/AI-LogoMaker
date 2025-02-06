CREATE TABLE `usersImage` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`userId` text NOT NULL,
	`image` text NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`createdAt` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
