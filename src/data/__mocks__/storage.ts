export enum STORAGE_KEYS {
  USERNAME = 'username',
  JOB_TITLE = 'jobTitle'
}

export const useStorageValue = jest.fn((key: string) => ({
  data: `${key}.value`,
  isLoading: false
}))

export const useStorageSetter = jest.fn(() => ({ mutate: jest.fn() }))

export const useClearStorage = jest.fn(() => ({ mutate: jest.fn() }))