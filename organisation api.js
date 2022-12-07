import axios from "./index";

export async function updateSettings(data) {
  return axios.put("organisation/settings", data);
}

export async function updateMoolSettings(data) {
  return axios.put("user/structure", data);
}

export async function checkUserName(data) {
  return axios.post("auth_check/validate/info", data);
}

export async function fetchEmployees(data) {
  return axios.post("organisation/employee/list", data);
}

export async function fetchActiveEmployees(organisationId) {
  return axios.get("organisation/active/employee/list/" + organisationId);
}

export async function uploadEmployees(data) {
  return axios.post("auth/register/employee", data);
}

export async function registerSingleEmployee(data) {
  return axios.post("auth/add/employee", data);
}

export async function editEmployee(data) {
  return axios.post("auth/edit/employee", data);
}

export async function disableEmployee(data) {
  return axios.post("auth/disable/employee", data);
}

export async function calculateCTC(data) {
  return axios.post("mool/ctc", data);
}

export async function addBonus(data) {
  return axios.post("employee/bonuses", data);
}

export async function addMcloseField(data) {
  return axios.post("organisation/mclosefield", data);
}

export async function getMcloseData(data) {
  return axios.get("org/mclose/" + data);
}

export async function getOrgAllowances(data) {
  return axios.get(`organisation/allowances/${data}`);
}

export async function addMonthClose(data) {
  return axios.post(`org/create/mclose`, data);
}

export async function removeFromOrg(data) {
  return axios.post(`user/remove/employee/`, data);
}

export async function getUserFromPAN(data) {
  return axios.get(`user/form/pan/${data}`);
}

export async function getUserFromId(data) {
  return axios.get(`user/form/id/${data}`);
}

export async function getUserFromEmail(data) {
  return axios.get(`user/form/email/${data}`);
}

export async function createNewEmployee(data) {
  return axios.post(`user/add/employee`, data);
}

export async function updateOrganisationDetails(data) {
  return axios.post(`organisation/update/details`, data);
}

export async function verifyDocument(data) {
  return axios.post(`verify/proof`, data);
}

export async function getMonthCloseFields(data) {
  return axios.get(`organistion/mclose/fields/${data}`);
}

export async function getTotalCTC(data) {
  return axios.get(`organisation/total/ctc/${data}`);
}

export async function getOrgUniqueCode(data) {
  return axios.get(`org/unique/code/${data}`);
}

export async function getGraphData(data) {
  return axios.get(`organisation/payslipInfo/${data}`);
}

export async function uploadPayslips(data) {
  return axios.post(`org/upload/payslips`, data);
}

export async function updateDeductions(data) {
  return axios.put(`employee/deduction`, data);
}

export async function updateAllowances(data) {
  return axios.put(`employee/allowances`, data);
}

export async function updateEmployeePercentage(data) {
  return axios.put(`employee/percentage`, data);
}

export async function houseRentUpdate(data) {
  return axios.put(`employee/houseRent`, data);
}

export async function createSettlement(data) {
  return axios.post(`org/create/settlement`, data);
}

export async function getEmployeeSettlement(data) {
  return axios.get(`employee/settlement/${data}`);
}

export async function getOrgReimbursement(data) {
  return axios.get(`reimbursement/org/${data}`);
}

export async function verifyReimbursement(data) {
  return axios.post(`verify/reimbursements`, data);
}

export async function updateReimbursementState(data) {
  return axios.post(`update/reimbursements/state`, data);
}

export async function getPendingOrgReimbursement(data) {
  return axios.get(`reimbursement/pending/org/${data}`);
}

export async function getFreezeInfo(data) {
  return axios.get(`org/freeze/info/${data}`);
}

export async function updateFreeze(data) {
  return axios.put("freeze", data);
}

export async function getFreeze(data) {
  return axios.get(`freeze/${data}`);
}

export async function getPayslipCounter(data) {
  return axios.get(`employee/payslip/counter/${data}`);
}

export async function getMoolCoins(data) {
  return axios.get(`mooldhan/${data}`);
}

export async function requestMoolCoins(data) {
  return axios.post(`mooldhan_request`, data);
}

export async function getMoolCoinRequests(data) {
  return axios.get(`mooldhan_request/org/${data}`);
}

export async function getMoolCoinTransactions(data) {
  return axios.get(`mooldhan/get/transactions/${data}`);
}

export async function getMoolCoinsSubscription(data) {
  return axios.get(`organisation/subscriptions/by/${data}`);
}

export async function runPayroll(data) {
  return axios.get(`employee/payslip/auto/generate/${data}`);
}
export async function getReportsData(data) {
  return axios.get(`organisation/json/${data}`);
}

export async function setPayslipLog(data) {
  return axios.post(`org/payslip/log`, data);
}

export async function getOrgSettlements(data) {
  return axios.get(`org/settlements/${data}`);
}

export async function deleteSettlement(data) {
  return axios.delete(`org/settlement/${data}`);
}

export async function updateCTC(data) {
  return axios.post(`org/update/ctc`, data);
}

export async function getOrgInfo(data) {
  return axios.get(`org/info/${data}`);
}

export async function removeCAFromOrg(data) {
  return axios.post("org/revoke/ca", data);
}

export async function getYearlyCTC(data) {
  return axios.get(`ctc/yearly/${data}`);
}

export async function getYTDData(data) {
  return axios.get(`payslip/ytd/${data}`);
}

export async function getCurrentMclose(data) {
  return axios.get(`mclose/${data}`);
}

export async function getCurrentReim(data) {
  return axios.get(`reimbursement/${data}`);
}

export async function getOrgReim(data) {
  return axios.get(`all/reimbursement/${data}`);
}

export async function getStatutory(data) {
  return axios.get(`payslip/statutory_bonus/${data}`);
}

export async function bankAdvice(data) {
  return axios.get(`bankadvice/json/${data}`);
}

export async function getAllPayslipFreeze(data) {
  return axios.get(`org/payslip/all/${data}`);
}

export async function singlePayslipSendMail(data) {
  return axios.get(`payslip/send/mail/${data}`);
}

export async function getPayslipHTML(data) {
  return axios.get(`payslip/send/html/${data}`);
}

export async function getPayRegister(data) {
  return axios.get(`payslip/pay_register/${data}`);
}

export async function getBroadcastMessages(data) {
  return axios.get(`get/broadcast/${data}/2`);
}
export async function mapUser(data) {
  return axios.put(`user/map/`, data);
}

export async function updateAccess(data) {
  return axios.put(`user/access/`, data);
}

//? org/fnf/:organisationId/:month/:financialYear
export async function getFNF(data) {
  return axios.get(`org/settlements/${data}`);
}

//? organisation/payslip/:organisationId
export async function getPayslipsByOrgID(data) {
  return axios.get(`organisation/payslip/${data}`);
}

export async function managerReimbursement(data) {
  return axios.get(`manager/reimbursement`, { params: data });
}
export async function getAllGroups() {
  return axios.get(`groups`);
}

export async function getChildOrgs() {
  return axios.get(`organisation/children`);
}

export async function createNewGroup(data) {
  return axios.post(`groups`, data);
}

export async function createGroupFromParent(data) {
  return axios.post(`groups/create`, data);
}

export async function deleteGroup(data) {
  return axios.delete(`remove/group/${data}`);
}

export async function getGroupByGroupId(data) {
  return axios.get(`group/${data}`);
}

export async function updateGroupInfo(data) {
  return axios.put(`groups`, data);
}

export async function getAllGroupEmployees(_data) {
  return axios.get(`groups/employees`);
}

export async function getAdsByTargeting(data) {
  return axios.get(`target/campaign/${data}`);
}

export async function getProofsCount(organisationId, fyYear) {
  return axios.get(`unapproved/proofs/count/${organisationId}/${fyYear}`);
}

export async function getUnapprovedProofs(organisationId, fyYear, proofType) {
  return axios.get(
    `get/unapproved/proof/${organisationId}/${fyYear}/${proofType}`
  );
}

export async function getUnapprovedProofsOfSingleEmployee(
  id,
  fyYear,
  proofType
) {
  return axios.get(`get/proofs/type/${id}/${proofType}/${fyYear}`);
}

export async function checkUser(key, value) {
  return axios.get(`user/exist/${key}/${value}`);
}

export async function updateStatusData(data) {
  return axios.get(`org/update/status/${data}`);
}

export async function getAllDepartments() {
  return axios.get(`departments`);
}
export async function departmentByOrgId(data) {
  return axios.get(`/departments/${data}`);
}

export async function assignDeptBulk(data) {
  return axios.post(`user/assign/to/department/bulk`, data);
}

export async function createDept(data) {
  return axios.post(`department`, data);
}

export async function getDeptData(data) {
  return axios.get(`department/by/${data}`);
}

export async function getAllDeptList() {
  return axios.get(`departments`);
}

export async function getDeptUsers(data) {
  return axios.get(`user/department/by/${data}`);
}

export async function deleteDeptUsersBulk(deptId, data) {
  return axios.delete(`remove/user/from/department/bulk/${deptId}`, {
    data: data,
  });
}

export async function deleteDept(deptId) {
  return axios.delete(`remove/department/by/${deptId}`);
}

export async function getAllStatus() {
  return axios.get(`status`);
}

export async function statusByOrgId(data) {
  return axios.get(`/status/${data}`);
}

export async function createOrUpdateStatus(data) {
  return axios.post(`status`, data);
}

export async function deleteStatus(statusId) {
  return axios.delete(`status/${statusId}`);
}

export async function getAllDesignation() {
  return axios.get(`designations`);
}

export async function designationByOrgId(data) {
  return axios.get(`/designations/${data}`);
}

export async function createOrUpdateDesignation(data) {
  return axios.post(`designation`, data);
}

export async function deleteDesignation(designationId) {
  return axios.delete(`remove/designation/by/${designationId}`);
}

export async function payoutBeneficiary(orgId) {
  return axios.get(`payout/beneficiaries/${orgId}`);
}

export async function newPayoutBeneficiary(data) {
  return axios.post(`payout/add/beneficiary`, data);
}

export async function deletePayoutBeneficiary(orgId, beneficiaryId) {
  return axios.delete(`/payout/remove/beneficiary/${orgId}/${beneficiaryId}`);
}

export async function getAllTransactionHistory(orgId, month, year) {
  return axios.get(`/payout/all/by/${orgId}/${month}/${year}`);
}

export async function getAllTransactions(orgId, year) {
  return axios.get(`/payout/all/by/${orgId}/${year}`);
}

export async function getAllLocation() {
  return axios.get(`locations`);
}

export async function getLocationByOrgId(data) {
  return axios.get(`/locations/${data}`);
}

export async function createOrUpdateLocation(data) {
  return axios.post(`/location`, data);
}

export async function deleteLocation(locationId) {
  return axios.delete(`/remove/location/by/${locationId}`);
}

export async function newOrgPayout(obj) {
  return axios.post(`/payout/new/organisationInstance`, obj);
}

export async function orgPayoutDetails(objId) {
  return axios.get(`/payout/get/organisationInstance/${objId}`);
}

export async function updateEmployeeData(id, obj) {
  return axios.put(`employee/update/preference/${id}`, obj);
}

export async function updatePayslipFreeze(data) {
  return axios.put(`org/update/payslip/log`, data);
}

export async function updatePayslipMail(data) {
  return axios.put(`org/update/payslip/mail`, data);
}

export function createPayslip(data) {
  return axios.post("employee/payslip", data);
}

export async function getAllOrgReportsList(organisationId) {
  return axios.get(`/get/org/report/by/${organisationId}`);
}

export async function getOrgReportByReportId(reportId) {
  return axios.get(`/get/report/by/${reportId}`);
}

export async function deleteOrgReportByReportId(reportId) {
  return axios.delete(`/remove/report/by/${reportId}`);
}

export async function newOrgReport(body) {
  return axios.post(`/new/org/report`, body);
}

export async function getOrgReportInCSVByReportIdAndDate(
  organisationId,
  reportId,
  month,
  financialYear
) {
  return axios.get(
    `/payslip/dynamic/${organisationId}/${reportId}/${month}/${financialYear}`
  );
}

export async function getOrgReportInJsonByReportIdAndDate(
  organisationId,
  reportId,
  month,
  financialYear
) {
  return axios.get(
    `/payslip/dynamic/json/${organisationId}/${reportId}/${month}/${financialYear}`
  );
}

export async function getCashfreeBalance(data) {
  return axios.get(`cashfree/balance/${data}`);
}

export async function payoutTransfer(body) {
  return axios.post(`payout/transfer`, body);
}

export async function newEmployerOnBoarding(data) {
  return axios.post(`new/onboarding`, data);
}

export async function updateEmployerOnBoarding(data) {
  return axios.post(`update/onboarding`, data);
}

export async function getEmployerOnBoarding(organisationId, id) {
  return axios.get(`fetch/onboarding/${organisationId}/${id}`);
}

export async function deleteMonthClose(data) {
  return axios.delete(`org/mclose/${data}`);
}

export async function updateAttendanceReport(data) {
  return axios.put(`employee/attendance/details`, data);
}

export async function createEmployeeDetails(data) {
  return axios.post(`employee/details`, data);
}
export async function updateTaxSettlementData(data) {
  return axios.post("employee/tax/settlement", data);
}

export async function getTaxSettlementData(organisationId, financialYear) {
  return axios.get(
    `organisation/settlement/${organisationId}/${financialYear}`
  );
}

export async function sendTaxSettlementNotification(data) {
  return axios.post(`action/notify/settlement`, data);
}

export async function updateTaxSettlementDeclaration(data) {
  return axios.post(`update/settlement/deductions`, data);
}

export async function updateTaxSettlementAllowances(data) {
  return axios.post(`update/settlement/allowances`, data);
}

export async function createChildOrganisation(data) {
  return axios.post(`create/child/organization`, data);
}

export async function authenticateChildOrganisation(data) {
  return axios.get(`authenticate/child/organization/${data}`);
}

export async function getOrganisationFreezeInfo(data) {
  return axios.get(`payslip/freeze/${data}`);
}

export async function updateBusinessDates(data) {
  return axios.put("organisation/business/dates", data);
}

export async function createSingleLOPOverday(data) {
  return axios.post("single/mclose/lop", data);
}

export async function getAttendanceReportForOrg(data) {
  return axios.get(`org/attendance/by/${data}`);
}

export async function getLeaveLogs(data) {
  return axios.get(`leave/logs/by/${data}`);
}

export async function getLeaveLogsByStatus(data) {
  return axios.get(`leave/logs/by/status/${data}`);
}

export async function getLeaveListData(data) {
  return axios.get(`org/leaves/${data}`);
}
export async function creteOrgBlankLeave(data) {
  return axios.post(`leave/create/${data}`);
}
///leave/create/
export async function getHolidayListData(yearObj, orgId) {
  return axios.put(`holiday/year/${orgId}`, yearObj);
}

export async function createNewHoliday(data) {
  return axios
    .post(`new/holiday`, data)
    .catch((err) => console.log(err.response));
}

export async function deleteHoliday(holidayId) {
  return axios.delete(`holiday/${holidayId}`);
}

export async function getAllLogins(orgId, month, year) {
  return axios.get(`org/attendance/by/${orgId}/${month}/${year}`);
}

export async function getLoginsByDay(orgId, month, year, day) {
  return axios.get(`org/attendance/by/${orgId}/${day}/${month}/${year}`);
}

export async function getOrgReport(orgId, month, year) {
  return axios.get(`org/attendance/report/by/${orgId}/${month}/${year}`);
}

export async function orgCreateLeave(data) {
  return axios.post(`org/new/leave`, data);
}

export async function deleteOrgLeave(data) {
  return axios.delete(`org/leave/${data}`);
}

export async function orgAcceptRejectLeave(orgId, data) {
  return axios.put(`leave/status/${orgId}`, data);
}

export async function getEmployeeList(data) {
  return axios.post(`organisation/employee/list`, data);
}

export async function creditEmployeeLeave(data) {
  return axios.post(`credit/leave`, data);
}

export async function leaveBalanceReport(data) {
  return axios.get(`leaves/report/${data}`);
}

export async function getWeeklyOff(data) {
  return axios.get(`weekly_off/${data}`);
}

export async function weeklyOffUpdate(data) {
  return axios.post(`weekly_off`, data);
}

export async function removeWeeklyOff(data) {
  return axios.delete(`weekly_off/${data}`);
}

export async function updateEmployeeDetails(data) {
  return axios.put(`user/basic_info`, data);
}

export async function updateEmployeeIP(data) {
  return axios.put(`update/ip_details`, data);
}

export async function updateEmployeeCoordinates(data) {
  return axios.put(`update/coordinate`, data);
}
export async function updateLeaves(data) {
  return axios.post(`credit/bulk/leave`, data);
}

export async function updateJoiningDate(data) {
  return axios.post(`update/joining/date`, data);
}

export async function getTaxProjection(data) {
  return axios.get(`tax/projection/${data}`);
}

export async function updateEmployeeId(data) {
  return axios.post(`update/employee_id`, data);
}

export async function organisaitonUserChangePassword(data) {
  return axios.post(`org/change/password`, data);
}

export async function fetchApplicationsListWithApiAccessToken(organisationId) {
  return axios.get(`organisation/apiKey/${organisationId}`);
}

export async function addNewApplicationToApiAccess(data) {
  return axios.post(`organisation/apiKey/`, data);
}

export async function removeApplicationFromApiAccess(appID, organisationID) {
  return axios.delete(`organisation/apiKey/${appID}/${organisationID}`);
}

export async function getStateApis({
  organisationId,
  stateId,
  financialYear,
  month,
}) {
  return axios.get(
    `get/report/apis/${organisationId}/${financialYear}/${month}/${stateId}`
  );
}

export async function addLoansAndSalaries(data) {
  return axios.post(`loan/advance-salary`, data);
}

export async function getLoansAndSalaries(organisationID) {
  return axios.get(`loans/advance-salaries/${organisationID}`);
}

export async function deleteLoansAndSalaries(organisationID) {
  return axios.delete(`loan/advance-salary/${organisationID}`);
}

export async function updateLoansAndAdvanceSalaryByRefID(data) {
  return axios.put(`org/modify/emi-amount`, data);
}
export async function getBlockEmployees(organisationId, month, financialYear) {
  return axios.get(
    `/employees/blocked/payroll/${organisationId}/${month}/${financialYear}`
  );
}
export async function updateTestPayoutApis(data) {
  return axios.put(`payout/transfer/test`, data);
}

export async function blockPayroll(data) {
  return axios.put(`blocked/payroll`, data);
}

export async function updateESIC_Configurations(data) {
  return axios.put(`set/esic/settings`, data);
}

export async function saveTermsAndConditions(data) {
  return axios.post(`save/termsAndConditions`, data);
}

export async function getTermsAndConditions({ organisationId, keyName }) {
  return axios.get(
    `fetch/keyExistsInTermsAndConditions/${organisationId}/${keyName}`
  );
}

export async function refreshStatusOfCashfree({
  organisationId,
  referenceId,
  transferId,
}) {
  return axios.get(
    `cashfree/transfer/status/${organisationId}/${referenceId}/${transferId}`
  );
}

export async function minWagesDynamicInputs(stateCode) {
  return axios.get(`minimumWages/input-fields/${stateCode}`);
}

export async function minWagesGeneralStructure(data) {
  return axios.post(`minimumWages/general-structure`, data);
}

export async function minWagesCurrentStructure(id) {
  return axios.get(`minimumWages/current-structure/${id}`);
}

export async function saveMinWagesStructure(data) {
  return axios.post(`minimumWages/save-structure`, data);
}

export async function getMinWagesExistingStructure({ id, financialYear }) {
  return axios.get(`minimumWages/existing-structure/${id}/${financialYear}`);
}

export async function updateApplicableStructure(data) {
  return axios.put(`minimumWages/update-applicable`, data);
}

export async function getAllEmployeesAccordingToMinWages(organisationId) {
  return axios.get(`minimumWages/employee-list/${organisationId}`);
}
