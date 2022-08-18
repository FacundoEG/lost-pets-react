declare module "*.css";
declare module "*.svg?url";
declare module "*.png" {
  const value: any;
  export default value;
}
