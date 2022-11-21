// module.exports = {
//   preset: 'jest-preset-angular',
//   setupFilesAfterEnv: ['./setup-jest.ts'],
//   globalSetup: 'jest-preset-angular/global-setup',
//   testEnvironment: 'jsdom',
// };

import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
};
