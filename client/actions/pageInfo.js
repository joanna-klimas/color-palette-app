export const PENDING = 'PENDING'

export function setPending (pending) {
  return {
    type: PENDING,
    pageInfo: {
      pending
    }
  }
}