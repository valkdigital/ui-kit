## Build Pipeline

Follow these two steps to start the build pipeline.

- Create a release branch based on incremental version i.e.: 0.0.43
- Update the package version by running `yarn version --new-version patch`
- Finish release branche
- Push to master and the build pipeline will release the npm package and update https://valkdigital.github.io/ui-kit

## Build manually

- `yarn version --new-version patch`
- `yarn release`

## Deploy to storybook manually

- `cd example && yarn deploy-storybook`
