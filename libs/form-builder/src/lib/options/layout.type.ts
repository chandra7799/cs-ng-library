export type Layout = {
  container: string
  [key: string]:
    string
    | {
        control?: string
        label?: string
        width?: string
      }
}
