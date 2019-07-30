export const PENDING = 'PENDING'

export function setPending (boolean) {
  return {
    type: PENDING,
    pageInfo: {
      pending: boolean
    }
  }
}