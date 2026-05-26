export const ENDPOINTS = {
  LOGIN: "/Franchisees/Login",
  SENDOTP: "/api/OTP/SendOTP",
  VERIFYOTP: "/api/OTP/VerifyOTP",
  USERS: "/users",
  PROFILE: "/profile",
  MachineMapping: "/MachineFranchiseeMapping",
  // GETResturantByFranchise : "/FranchiseeRestaurantMapping",
    GETResturantByFranchise : "/FranchMachineRestaurantMapping",
  GETFoodResturantByFranchise : "/FoodRestaurantMapping",
  FoodSessionInfo: "/FoodSessionInfo",
  clearTrey: "/SessionFoodInfo/ResetSessionFoodInfoByMachine",
  UpdateFood:"/SessionFoodInfo/LoadSessionFoodInfoByMachine"
};
