# SFDX Bootstrap

A script to automatically bootstrap an SFDX project with tools
and boilerplate files to facilitate either creating a brand new project, or
onboarding into an existing one.

## Prerequisites

There's a few prerequisites you should check to make sure the script will run
properly.

1. It must be run `bash`. If in Windows, this can be `git
bash`, usually included when installing `git` in Windows, and easily
accessible from VSCode. If in Linux or Mac, `bash` should be included with
your OS.

2. `npm` and the Salesforce cli `sf` are required. If you're reading this, you
   probably already have these, but if not, check [here](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_install_cli.htm)

3. `jq` is required to manipulate configuration json files. You can check if `jq` is available on
    your shell using

        command -v jq

    If no output is provided, you can install `jq` following the steps provided
    [here](https://jqlang.github.io/jq/download/), but the most common ways are:

    - Windows: Run `git bash` **as Administrator** and run

          curl -L -o /usr/bin/jq.exe https://github.com/stedolan/jq/releases/latest/download/jq-win64.exe

    - Mac:

            brew install jq

    - Linux: Install using your distribution's package manager, examples:

      - Debian based:

              sudo apt-get install jq

      - RHEL based:

              sudo dnf install jq

## What does this do?

The script will set up a project with a few company-wide accepted configurations
and tools to help kickstart a new project, or help with onboarding onto an
existing one. It will:

- Create the SFDX project if not currently in one when the script is run
- Create the git repository if not initialized
- Install all project `npm` packages. Including:
    - Prettier, and the Apex plugin
    - ESLint, and Salesforce packages for Aura and LWCs
    - Jest, and the `sfdx-lwc-jest` wrapper for Salesforce components
    - `sa11y/jest` for accessibility tests
- Set up configuration files, like:
    - Adding apex rules to `.prettierrc` if they don't exist
    - Configuration files for `sa11y/jest`
    - Add configuration options to `jest.config.js`
    - Create an `omnistudio-components.json` file used to ignore Omnistudio
    auto-generated LWCs from some validations
- Download the PMD binary into the project, as well as the Attentis PMD ruleset
- Download a set of validation scripts you can use to run validations on the
project.
- Install company recommended VSCode extensions if not installed
- Add local VSCode settings to configure the PMD, Prettier and Jest extensions
for VSCode

## Usage

Download the latest version of the `sf-bootstrap` script from [here](https://github.com/Attentis-Consulting-Inc/sfdx-bootstrap/releases/download/latest/sf-bootstrap), and run it using `bash`, like

    bash sf-bootstrap
