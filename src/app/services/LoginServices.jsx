import baseRouter from "./ApiServices";

const loginServiceApi = async (formData) => {
  const response = await baseRouter.post("/userLogin", formData);

  return response;
};

const electricityApi = async () => {
  const response = await baseRouter.post("/getOperaterbill");
  return response.data;
};
const waterBillApi = async () => {
  const response = await baseRouter.post("/getOperaterbill");
  return response.data;
};
const gasBillApi = async () => {
  const response = await baseRouter.post("/getOperaterbill");
  return response.data;
};
const licBillOperator = async () => {
  const response = await baseRouter.post("/getOperaterbill");
  return response.data;
};
const fetchLicBillDetails = async (data) => {
  const response = await baseRouter.post("/getLicbillDetails", data);
  return response.data;
};

const handleSubmitLicBill = async (data) => {
  const response = await baseRouter.post("/payLicBill", data);
  return response.data;
};

const lpgGasProvider = async () => {
  const response = await baseRouter.post("/getLpgOperaterbill");
  return response.data;
};

const getbillDetails = async (data) => {
  const response = await baseRouter.post("/getbillDetails", data);
  return response.data;
};

const handleSubmitBill = async (data) => {
  const response = await baseRouter.post("/payBill", data);
  return response.data;
};

const fetchDthApi = async () => {
  const response = await baseRouter.post("/getOperater");
  return response.data;
};

const getLpgBillDetails = async (data) => {
  const response = await baseRouter.post("/getLpgBillDetails", data);
  return response.data;
};

const handleLpgBill = async (data) => {
  const response = await baseRouter.post("/payLPGBill", data);
  return response.data;
};

const getOperaterOrCricle = async (data) => {
  const response = await baseRouter.post("/getOperaterOrCricle", data);
  return response.data;
};
const getBrowserPlan = async (data) => {
  const response = await baseRouter.post("/getbrowerPlan", data);
  return response.data;
};
const dthrechargeSumbit = async (data) => {
  const response = await baseRouter.post("/dth-rechargeSumbit", data);
  return response.data;
};

const moblieOperator = async () => {
  const response = await baseRouter.post("/getOperater");
  return response.data;
};
const mobileRechargeSubmit = async (data) => {
  const response = await baseRouter.post("/mobile-rechargeSumbit", data);
  return response.data;
};

const transferWalletMoney = async (data) => {
  const response = await baseRouter.post("/transferWalletMoney", data);
  return response;
};

export {
  loginServiceApi,
  electricityApi,
  getbillDetails,
  handleSubmitBill,
  fetchDthApi,
  getBrowserPlan,
  getOperaterOrCricle,
  dthrechargeSumbit,
  waterBillApi,
  gasBillApi,
  lpgGasProvider,
  getLpgBillDetails,
  handleLpgBill,
  licBillOperator,
  fetchLicBillDetails,
  handleSubmitLicBill,
  moblieOperator,
  mobileRechargeSubmit,
  transferWalletMoney,
};
