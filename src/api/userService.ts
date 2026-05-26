import apiClient from "./apiClient";
import { ENDPOINTS } from "./endpoints";
import axios from 'axios';

// 🔹 Request Payload Type
interface LoginPayload {
  email: string;
  password: string;
}

// 🔹 Response Types
interface LoginResponse {
  token: string;
}

interface User {
  id: number;
  name: string;
  email: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
}

interface SendOtpRequest {
  Name: string;
  Description: string;
}



// 🔹 Generic API Response (optional but recommended)
interface ApiResponse<T> {
  Data: T;
  message?: string;
  success?: boolean;
  returnCode?: number;
  mobileNo?: string;
}

// ✅ POST - Login
export const LoginUser = async (
  username: string,
  password: string
): Promise<ApiResponse<any[]>> => {
  const response = await apiClient.post<ApiResponse<any[]>>(
    ENDPOINTS.LOGIN,
    {
      username,
      password
    }
  );
console.log("response",response)
  return response.data;
};


export const SendUserOTP = async (
  mobileNo: string
) => {
  const response = await apiClient.post(
    `${ENDPOINTS.SENDOTP}?mobileNo=${mobileNo}`
  );

  return response.data;
};


export const VerifyUserOTP = async (
  mobileNo: string,
  otpCode: number
) => {
  const response = await apiClient.post(
    `${ENDPOINTS.VERIFYOTP}?mobileNo=${mobileNo}&otpCode=${otpCode}`
  );

  return response.data;
};

// export const VerifyUserOTP = async (
//   mobileNo: string,
//   otpCode: string
// ): Promise<ApiResponse<any[]>> => {
//   const response = await apiClient.post<ApiResponse<any[]>>(
//     ENDPOINTS.VERIFYOTP,
//     {
//       mobileNo,
//       otpCode
//     }
//   );

//   return response.data;
// };


// ----------------------------ajith------------------------------------------

//Select Machine WRT franchiseeID

export const getMachineMapping = async (
  franchiseeID: number
): Promise<ApiResponse<any[]>> => {
  const response = await apiClient.get<ApiResponse<any[]>>(
    ENDPOINTS.MachineMapping,
    {
      params: { franchiseeID },
    }
  );

  return response.data;
};

// Get resturant names by Franchise- when set Food in Tray

export const getResturantMapping = async (
  franchiseeID: number
): Promise<ApiResponse<any[]>> => {
  const response = await apiClient.get<ApiResponse<any[]>>(
    ENDPOINTS.GETResturantByFranchise,
    {
      params: { franchiseeID },
    }
  );

  return response.data;
};


// Get Food Session
export const getSessionMapping = async (): Promise<ApiResponse<any[]>> => {
  const response = await apiClient.get<ApiResponse<any[]>>(
    ENDPOINTS.FoodSessionInfo,{}
  );

  return response.data;
};



// Get Food list from resturant - when set Food in Tray
export const getFoodResturantMapping = async (
  restaurantID: number,
  foodSessionID: number
): Promise<ApiResponse<any[]>> => {
  const response = await apiClient.get<ApiResponse<any[]>>(
    ENDPOINTS.GETFoodResturantByFranchise,
    {
      params: { restaurantID, foodSessionID },
    }
  );

  return response.data;
};

// Load Food in Trey
export const LoadFood = async (
  machineID: number,
  trayID: number,
  foodResturantID: number,
  loadQuantity: number
): Promise<ApiResponse<any[]>> => {
  const response = await apiClient.post<ApiResponse<any[]>>(
    ENDPOINTS.UpdateFood,
    {
      machineID,
      trayID,
      foodResturantID,
      loadQuantity,
    }
  );

  return response.data;
};


// Clear Trey
export const clearTrey = async (
  machineID: number
): Promise<ApiResponse<any[]>> => {
  const response = await apiClient.post<ApiResponse<any[]>>(
    ENDPOINTS.clearTrey,
    null,
    {
      params: { machineID },
    }
  );

  return response.data;
};