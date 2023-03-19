export type Layout = {
  container: string
  [key: string]:
    | {
        control?: string
        label?: string
        width?: string
      }
    | string
}
