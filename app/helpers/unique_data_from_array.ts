export default ((arr: Array<unknown>, param: string) => [...new Set(arr.map((e: any) => e[param]))]);
