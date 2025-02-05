# ERP D

Welcome ERP.........

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Installation / Dependencies](#installation--dependencies)
  - [Running the code](#running-the-code)
- [Contributing to the Code Base](#contributing-to-the-code-base)

  - [Types, interfaces and enums](#types-interfaces-and-enums)

- [Git](#git)
  - [Commit Messages](#commit-messages)
  - [Branching](#branching)
  - [Pull Requests](#pull-requests)

# Introduction

Intro to to the ERP solution

# Getting Started

Follow the steps below to get started with StorePro Web

## Installation / Dependencies

- Install Node.Js
- Install TypeScript
- Install Git

## Running the Code

1. Clone the code repo from here
   ```sh
   git clone https://github.com/profchiso/nestjs-microservice-RMQ.git
   ```
2. Navigate to the project directory
   ```sh
   cd nestjs-microservice-RMQ
   ```
3. Install dependencies
   ```sh
   npm install
   ```
4. Run the application
   ```sh
   docker compose up
   ```
5. Run test
   ```sh
   npm test
   ```

# Contributing to the Code Base

To effectively contribute to this project, the following guideline should be followed.

## Pages and Components

- **Folder name**: Use snake-case for folder names.
- **File name**: For file names, use lower-snake-case. E.g., `dto-file.ts`. Adding `.` to a filename should only specify the file extension or in some case, the type. Of course, there can always be an exception like in `index` files.

## Types, Interfaces and Enums

This is a typescript project and as such, typing is very important. For consistency across the project, please adhere to the below guidelines.

- **Location**: All types, interfaces and enums should be declared in the `types` folder or in the shared libs if there are re-usable.
- **No Inline Declarations**: No types or interfaces should be declared within a component file.
- **Prefix**: Types should start with `T`, interfaces should start with `I`, and enums should start with `E`. E.g., `TUser`, `IUserProfile`, `EUserStatus`.
- **Descriptive Names**: Use descriptive and clear names for types and interfaces.
- **Avoid `any`**: Avoid using the `any` type. Use specific types or generics instead.
- **Avoid `magic string`**: Avoid using magic strings

## Git

### Commit Messages

- **Prefix with Jira Ticket Number**: All commit messages should start with the relevant Jira ticket number.
- **Format**: Use the format `[JT-123] Commit message describing the change`.
- **Descriptive Messages**: Write clear and concise commit messages that describe the change being made.

### Branching

- **Feature Branches**: Create feature branches for new features or bug fixes.
- **Naming**: Use descriptive names for branches, prefixed with the Jira ticket number. E.g., `JT-123-add-authentication`.

### Pull Requests

- **Format**: Check pull request template
- **Description**: Provide a clear description of the changes made in the pull request.
- **Link to Jira Ticket**: Include a link to the relevant Jira ticket in the pull request description.
- **Image**: If possible, add an image or screenshot to the pull request to illustrate the changes.
- **Review**: Ensure that the code is reviewed and approved by at least one other team member before merging.
