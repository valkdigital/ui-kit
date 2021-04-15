## Build Pipeline

Follow these steps to start the build pipeline.

1. When ready to release new version: `git flow release start version-number`
2. `yarn version --new-version patch` or explicit version number (`1.2.3`) instead of `patch`
3. Then finish the release branch: `git flow release finish version-number`
4. Push your master branch to start the build pipeline to release the npm package and update https://valkdigital.github.io/ui-kit. Don't forget to push your develop branch aswell.

## Build manually

1. `yarn version --new-version patch`
2. `yarn release`

## Deploy to storybook manually

`cd example && yarn deploy-storybook`
