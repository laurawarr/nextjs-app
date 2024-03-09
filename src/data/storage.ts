import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export enum STORAGE_KEYS {
  USERNAME = 'username',
  JOB_TITLE = 'jobTitle'
}

export function useStorageValue(key: STORAGE_KEYS) {
  const query = useQuery<string>({
    queryKey: [key],
    queryFn: () => sessionStorage[key] ?? null
  })
  return query
}

export function useStorageSetter(key: STORAGE_KEYS) {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (value: string) => {
      sessionStorage[key] = value
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [key] })
    },
  })

  return mutation
}

export function useClearStorage() {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async () => {
      Object.values(STORAGE_KEYS).forEach(key => {
        sessionStorage.removeItem(key)
      })
    },
    onSuccess: () => {
      Object.values(STORAGE_KEYS).forEach(key => {
        queryClient.invalidateQueries({ queryKey: [key] })
      })
    },
  })

  return mutation
}