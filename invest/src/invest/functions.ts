function getImport(feature: any) {
  if (feature === 'base-page') {
      return `import { BasePage } from 'bridge';`;
  }
}

function getExtends(feature: any) {
  if (feature === 'base-page') {
    return ``;
  }
}

function getMethod(feature: any) {
  if (feature === 'base-page') {
    return `protected setNavBarTitle() {
      // todo
    }`;
  }
}

export { getImport, getExtends, getMethod };