function getImport(artifacts: any, key: string) {
  const item: any = findByKey(artifacts, key);
  if (item.configs.value.key === 'base-page') {
    return `import { BasePage } from 'bridge';`;
  }
}

function getExtends(artifacts: any) {
  if (artifacts === 'base-page') {
    return ``;
  }
}

function getMethod(artifacts: any, key: string) {
  const item: any = findByKey(artifacts, key);
  if (item.configs.value.key === 'base-page') {
    return `protected setNavBarTitle() {
      // todo
    }`;
  }
}

function findByKey(data: any[], key: string) {
  return data.find(
    (item) => {
      return item.type === key;
    });
}

export { getImport, getExtends, getMethod };