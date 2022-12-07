import {
  EmployeeDashboard,
  EmployeeDocuments,
  EmployeeList,
  OrgLoginFlow,
  MonthClose,
  OrganisationSettings,
  OrganisationDashboard,
  EmployeeLoginFlow,
  SalaryManagement,
  Settlement,
  EmployeeReimbursement,
  OrganisationReimbursement,
  Support,
  OrganisationRunPayroll,
  BroadcastMessage,
  Calculator,
  AllInvestementAllowance,
  Separation,
  EmployeProfile,
  PayoutTransactionHistory,
  PayoutBeneficiary,
  DataSync,
  TaxSettlement,
  ChildOrganisation,
  Payroll,
  ZeroState,
  ReportsTable,
  ComplianceReport,
  OrganisationReport,
  CustomReportTable,
  AddMultipleEmployeePage,
  CustomReports,
  DeductionDeclaration,
  AllowancesDeclaration,
  TaxProjectionContainerItem,
  EmployeeDetails,
  Logs,
  PreviousEmployment,
  TestPayouts,
} from "../components";
import {
  Access,
  Allowances,
  Department,
  Designation,
  Freeze,
  General,
  Groups,
  Location,
  Payout,
  Status,
} from "../components/OrganisationSettingsV2/components";

import settingsicon from "../assets/icons/Settingsicon.svg";
import payouticon from "../assets/icons/Bank Cards.svg";
import CoinsIcon from "../assets/icons/CoinsIcon.svg";
import Deduction from "../components/EmployerViewDocuments/components/deduction";
import Allowance from "../components/EmployerViewDocuments/components/allowance";
import calculator from "../assets/icons/Calculator.svg";
import reports from "../assets/icons/reports.svg";
import ReportsActive from "../assets/icons/ReportsActive.svg";
import payroll from "../assets/icons/payroll.svg";
import utilityIcon from "../assets/utility.svg";
import payrollActive from "../assets/icons/Calendaractive.svg";
import homeImage from "../assets/icons/Home.svg";
import homeActiveImage from "../assets/icons/Homeactive.svg";
import attendance from "../assets/icons/Calendar 03.svg";
import payoutsActive from "../assets/icons/payoutsActive.svg";
import attendanceActive from "../assets/icons/attendanceActive.svg";
import settingsActive from "../assets/icons/settingsActive.svg";
import declarationIcon from "../assets/icons/declarationIcon.svg";
import commonIcon from "../assets/icons/Passport.svg";
import User from "../assets/icons/User.svg";
import Boxes from "../assets/icons/Boxes.svg";

import OrganisationSettingsContainer from "../components/Attendance/OrganisationSetting";
import {
  LeaveReport,
  ManagerLeave,
  OrganisationAttendance,
  OrganisationLeave,
} from "../components/Attendance";
import EmployeeDashboardContainer from "../components/Attendance/EmployeeDashboard/EmployeeDashboard";
import ConcessionalEducationFacilitiesPerqs from "../../src/components/OrganisationComponents/Perqs/ConcessionalEducationFacilitiesPerqs";
import { EmployeePerqs } from "../components/EmployeeComponents";
import NonTaxablePerqs from "../components/OrganisationComponents/Perqs/NonTaxablePerqs";
import OrganisationApiAccessKeyListContainer from "../components/OrganisationApiKey";
import OrganisationAddNewApplicationToAPIAccessContainer from "../components/OrganisationApiKey/OrganisationAddNewApplicationToAPIAccess";
import IPLocation from "../components/IPLocation";
import ESICConfigurationContainer from "../components/OrganisationSettingsV2/components/esicConfig";
import GasElectricityWaterPerqs from "../components/OrganisationComponents/Perqs/GasElectricityWaterPerqs";
import TicketPerqs from "../components/OrganisationComponents/Perqs/TicketPerqs";
import ValuationPerqs from "../components/OrganisationComponents/Perqs/Valuation";
import InterestFreeCocessionalLoanPerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/InterestFreeCocessionalLoan";
import FreeConcessionalFoodPerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/FreeConcessionalFood";
import GiftsVouchersTokensPerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/GiftsVouchersTokens";
import CreditCardExpensePerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/CreditCardExpense";
import ClubExpenditurePerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/ClubExpenditure";
import UseMovableAssetPerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/UseMovableAsset";
import OtherBenefitsPerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/OtherBenefits";
import TransferMovableAssetPerqs from "../components/OrganisationComponents/Perqs/DetailPerqs/TransferMovableAsset";
import EquitySharesPerqs from "../components/OrganisationComponents/Perqs/EquityShares";
import ResidentialAccomodation from "../components/OrganisationComponents/Perqs/ResidentiaAccomodation";
import MotorCar from "../components/OrganisationComponents/Perqs/MotorCar";
import DomesticServantsPerqs from "../components/OrganisationComponents/Perqs/DomesticServants";
import SpecifiedEmployees from "../components/OrganisationComponents/Perqs/SpecifiedEmployees";
import MinimumWages from "../components/OrganisationSettingsV2/components/minWages";

/**
 * Dual Navigation Magic
 * What we need to do is ?
 * Two type of navigation
 * -> Parent
 * -> Child
 *
 * ** Parent navigation **
 * - Parent Navigator Items
 *  - logo
 *  - label
 *  - default route
 *  - subroute one
 *
 * - Whenever parent navigation got selected then the default route will get selected.
 * - Try to create new component while working in navigation
 *
 * -  Child navigator components
 *  - label
 *  - path
 *  - component
 *  - visibility
 *
 * There is some default navigation who doesnot have any item inside it but they will be there in the application by default. those navigations we need to export too.
 * lets start with navigation today.
 */

const routes = {
  employee: {
    redirect: "/employee/home/dashboard",
    route: "employee",
    routes: {
      // Home routes
      dashboard: {
        name: "Home",
        path: "dashboard",
        component: EmployeeDashboard,
        subpath: "home",
      },
      documents: {
        name: "Employee Documents",
        path: "documents",
        component: EmployeeDocuments,
        subpath: "home",
      },

      // Salary related Component routes
      salary_manage: {
        name: "Manage Salary",
        path: "salary_manage",
        component: SalaryManagement,
        subpath: "salary",
      },
      reimbursement: {
        path: "reimbursement",
        name: "Reimbursement",
        component: EmployeeReimbursement,
        subpath: "salary",
      },

      // Declaration routes
      declaration: {
        name: "Declarations",
        path: "declaration",
        component: DeductionDeclaration,
        subpath: "declaration",
      },
      allowance: {
        path: "allowance",
        component: AllowancesDeclaration,
        subpath: "declaration",
      },
      previous_employment: {
        path: "previous_employment",
        component: PreviousEmployment,
        subpath: "declaration",
      },
      tax_projection: {
        path: "tax_projection",
        component: TaxProjectionContainerItem,
        subpath: "declaration",
      },
      non_taxable: {
        path: "non_taxable",
        component: EmployeePerqs,
        subpath: "declaration",
      },

      login_flow: {
        path: "flow",
        component: EmployeeLoginFlow,
        subpath: "login",
      },

      // Common functionality
      support: {
        name: "Support",
        path: "support",
        component: Support,
        subpath: "common",
      },
      profile: {
        name: "Profile",
        path: "profile",
        component: EmployeProfile,
        subpath: "common",
      },
      broadcast: {
        name: "Broadcast",
        path: "broadcast",
        component: BroadcastMessage,
        subpath: "common",
      },
      ZeroState: {
        name: "zero-state",
        path: "zero",
        component: ZeroState,
        subpath: "common",
      },
      logs: {
        name: "Logs",
        path: "logs",
        component: Logs,
        subpath: "common",
      },

      // Employee Attendance
      home: {
        name: "Dashboard",
        path: "home",
        component: EmployeeDashboardContainer,
        subpath: "attendance",
      },
      leave_report: {
        name: "Leave Report",
        path: "leave_report",
        component: LeaveReport,
        subpath: "attendance",
      },
      leave_application: {
        name: "Leave Applications",
        path: "leave_application",
        component: ManagerLeave,
        subpath: "attendance",
      },
    },
  },
  org: {
    redirect: "/org/home/dashboard",
    route: "org",
    routes: {
      dashboard: {
        name: "Dashboard",
        path: "dashboard",
        component: OrganisationDashboard,
        subpath: "home",
      },

      ZeroState: {
        name: "zero-state",
        path: "zero_state",
        component: ZeroState,
        subpath: "home",
      },
      child_organisation: {
        name: "Mapped Organisation",
        path: "mapped/organisation",
        component: ChildOrganisation,
        subpath: "home",
      },

      // Separate Section for employees
      employees: {
        name: "Employee",
        path: "employees",
        component: EmployeeList,
        subpath: "employee",
      },
      employeeAddition: {
        name: "Add Employee",
        path: "add-multiple-employees",
        component: AddMultipleEmployeePage,
        subpath: "employee",
      },
      data_sync: {
        name: "Data Sync",
        path: "data_sync",
        component: DataSync,
        subpath: "employee",
      },
      employee_details: {
        path: "employee_details/:id",
        component: EmployeeDetails,
        subpath: "employee",
      },

      // Configuration
      global: {
        path: "global",
        component: General,
        subpath: "config",
      },
      status: {
        path: "status",
        component: Status,
        subpath: "config",
      },
      location: {
        path: "location",
        component: Location,
        subpath: "config",
      },
      department: {
        path: "department",
        component: Department,
        subpath: "config",
      },
      designation: {
        path: "designation",
        component: Designation,
        subpath: "config",
      },
      iplocation: {
        name: "iplocation",
        path: "iplocation",
        component: IPLocation,
        subpath: "config",
      },
      access: {
        path: "access",
        component: Access,
        subpath: "config",
      },
      allowances: {
        path: "allowances",
        component: Allowances,
        subpath: "config",
      },
      groups: {
        path: "groups",
        component: Groups,
        subpath: "config",
      },
      freeze: {
        path: "freeze",
        component: Freeze,
        subpath: "config",
      },
      payout: {
        path: "payout",
        component: Payout,
        subpath: "config",
      },
      // api-key
      appAccess: {
        path: "apiAccess",
        component: OrganisationApiAccessKeyListContainer,
        subpath: "config",
      },
      // api-key
      esicConfiguration: {
        path: "esicConfiguration",
        component: ESICConfigurationContainer,
        subpath: "config",
      },
      // api-key
      minWagesConfiguration: {
        path: "minWagesConfiguration",
        component: MinimumWages,
        subpath: "config",
      },
      addApplicationToAPIAccess: {
        path: "addApplicationToAPIAccess",
        component: OrganisationAddNewApplicationToAPIAccessContainer,
        subpath: "config",
      },
      // Login Flow
      login_flow: {
        path: "flow",
        component: OrgLoginFlow,
        subpath: "login",
      },

      // Payroll activities
      reimbursement: {
        path: "reimbursement",
        name: "Reimbursement",
        component: OrganisationReimbursement,
        subpath: "payroll",
      },
      payroll_inputs: {
        name: "Payroll Inputs",
        path: "payroll_inputs",
        component: MonthClose,
        subpath: "payroll",
      },
      payroll_history: {
        name: "Payroll History",
        path: "history",
        component: Payroll,
        subpath: "payroll",
      },
      process: {
        name: "Payroll Process",
        path: "process/:financialYear/:month",
        component: OrganisationRunPayroll,
        subpath: "payroll",
      },
      taxSettlement: {
        name: "Tax Settlement",
        path: "tax-settlement",
        component: TaxSettlement,
        subpath: "payroll",
      },
      settlement: {
        name: "Settlement",
        path: "final_settlement/:id",
        component: Settlement,
        subpath: "payroll",
      },
      separation: {
        name: "Separation",
        path: "separation",
        component: Separation,
        subpath: "payroll",
      },
      employee_allowance: {
        name: "Allowance Verification",
        path: "employee_allowance/:id",
        component: Allowance,
        subpath: "payroll",
      },
      employee_deduction: {
        name: "Deduction Verification",
        path: "employee_deduction/:id",
        component: Deduction,
        subpath: "payroll",
      },

      // 4:  Report sectipon
      report: {
        name: "Reports",
        path: "report",
        component: OrganisationReport,
        subpath: "reports",
      },
      ReportsTable: {
        name: "Reports Table",
        path: "table",
        component: ReportsTable,
        subpath: "reports",
      },
      ComplianceReport: {
        name: "ComplianceReport",
        path: "compliance",
        component: ComplianceReport,
        subpath: "reports",
      },
      customReports: {
        name: "Custom reports Table",
        path: "custom",
        component: CustomReports,
        subpath: "reports",
      },
      customReportTable: {
        name: "Custom reports Table",
        path: "custom/table",
        component: CustomReportTable,
        subpath: "reports",
      },

      ctc_calculator: {
        name: "Calculator",
        path: "ctc_calculator",
        component: Calculator,
        icon: calculator,
        activeIcon: calculator,
        view: true,
        subpath: "utility",
      },

      investement_and_allowance: {
        name: "Investemene and allowance",
        path: "investement_and_allowance",
        component: AllInvestementAllowance,
        subpath: "common",
      },

      // Payouts
      transaction_history: {
        name: "Transaction History",
        path: "transactions",
        component: PayoutTransactionHistory,
        subpath: "payout",
      },
      payout_beneficiary: {
        name: "Beneficiary",
        path: "beneficiary",
        component: PayoutBeneficiary,
        subpath: "payout",
      },
      test_verification: {
        name: "Test Payouts",
        path: "test_payouts",
        component: TestPayouts,
        subpath: "payout",
      },

      profile: {
        name: "Profile",
        path: "profile",
        component: OrganisationSettings,
        subpath: "common",
      },
      support: {
        name: "Support",
        path: "support",
        component: Support,
        subpath: "common",
      },
      broadcast: {
        name: "Broadcast",
        path: "broadcast",
        component: BroadcastMessage,
        subpath: "common",
      },
      logs: {
        name: "Logs",
        path: "logs",
        component: Logs,
        subpath: "common",
      },

      // Attendance
      settings: {
        name: "Settings",
        path: "settings",
        component: OrganisationSettingsContainer,
        subpath: "attendance",
      },
      attendance: {
        name: "Attendance",
        path: "attendance",
        component: OrganisationAttendance,
        subpath: "attendance",
      },
      leave: {
        name: "Leave",
        path: "leave",
        component: OrganisationLeave,
        subpath: "attendance",
      },

      // Perqs
      non_taxable_perqs: {
        name: "Non Taxable",
        path: "non_taxable_perqs",
        component: NonTaxablePerqs,
        subpath: "perqs",
      },
      tickets: {
        name: "Taxable",
        path: "tickets",
        component: TicketPerqs,
        subpath: "perqs",
      },
      gas_electricity_water: {
        name: "Gas, Electricity and Water ",
        path: "gas_electricity_water",
        component: GasElectricityWaterPerqs,
        subpath: "perqs",
      },
      valuation: {
        name: "Valuation of other fringe benefits and amenities",
        path: "valuation",
        component: ValuationPerqs,
        subpath: "perqs",
      },
      interest_free_cocessional_loan: {
        name: "Interest free and concessional loan",
        path: "interest_free_cocessional_loan",
        component: InterestFreeCocessionalLoanPerqs,
        subpath: "perqs/valuation",
      },
      free_cocessional_food: {
        name: "Free and concessional food and non alcoholic beverages",
        path: "free_cocessional_food",
        component: FreeConcessionalFoodPerqs,
        subpath: "perqs/valuation",
      },
      gifts_vouchers_tokens: {
        name: "Gifts vouchers and tokens in lieu of such gifts",
        path: "gifts_vouchers_tokens",
        component: GiftsVouchersTokensPerqs,
        subpath: "perqs/valuation",
      },
      credit_card_expenses: {
        name: "Credit Card Expenses",
        path: "credit_card_expenses",
        component: CreditCardExpensePerqs,
        subpath: "perqs/valuation",
      },
      club_expenditure: {
        name: "Club Expenditure",
        path: "club_expenditure",
        component: ClubExpenditurePerqs,
        subpath: "perqs/valuation",
      },
      movable_assets: {
        name: "Movable Assets",
        path: "movable_assets",
        component: UseMovableAssetPerqs,
        subpath: "perqs/valuation",
      },
      transfer_movable_assets: {
        name: "Transfer of movable assets",
        path: "transfer_movable_assets",
        component: TransferMovableAssetPerqs,
        subpath: "perqs/valuation",
      },
      benefits_amenities: {
        name: "Other benefits or amenities",
        path: "benefits_amenities",
        component: OtherBenefitsPerqs,
        subpath: "perqs/valuation",
      },
      C_E_perqs: {
        name: "Free Education Facilities",
        path: "C_E_perqs",
        component: ConcessionalEducationFacilitiesPerqs,
        subpath: "perqs",
      },
      equity_shares: {
        name: "Equity Shares",
        path: "equity_shares",
        component: EquitySharesPerqs,
        subpath: "perqs",
      },
      residential_accomodation: {
        name: "Residential Accomodation",
        path: "residential_accomodation",
        component: ResidentialAccomodation,
        subpath: "perqs",
      },
      motor_car: {
        name: "Motor Car",
        path: "motor_car",
        component: MotorCar,
        subpath: "perqs",
      },
      domestic_servants: {
        name: "Domestic Servants",
        path: "domestic_servants_perqs",
        component: DomesticServantsPerqs,
        subpath: "perqs",
      },
      specifiedEmployees: {
        name: "Specified Employees",
        path: "specified_employees",
        component: SpecifiedEmployees,
        subpath: "perqs",
      },
    },
  },
  common: {
    payroll: {
      name: "Payroll History",
      path: "payroll",
      component: Payroll,
    },
    process: {
      name: "Payroll History",
      path: "payroll/process/:financialYear/:month",
      component: OrganisationRunPayroll,
    },
    reports: {
      name: "Reports Manage",
      path: "reports",
      component: OrganisationReport,
    },
    compliances: {
      name: "Compliance Reports",
      path: "compliances/report",
      component: ComplianceReport,
    },
    report_table: {
      name: "ReportsTable",
      path: "report_table",
      component: ReportsTable,
    },
    reimbursement: {
      path: "reimbursement",
      name: "Reimbursement Approval",
      component: OrganisationReimbursement,
    },
  },
};

const accessRoutes = {
  payroll: {
    name: "Payroll History",
    path: "access/payroll",
  },
  process: {
    name: "Payroll History",
    path: "access/payroll/process/:financialYear/:month",
  },
  reports: {
    name: "Reports Manage",
    path: "access/reports",
  },
  compliances: {
    name: "Compliance Reports",
    path: "access/compliances/report",
  },
  report_table: {
    name: "ReportsTable",
    path: "access/report_table",
  },
  reimbursement: {
    path: "access/reimbursement",
    name: "Reimbursement Approval",
  },
};

const navigator = {
  org: {
    path: "org",
    defaultSelections: "home",
    routes: {
      config: {
        label: "Settings",
        icon: settingsicon,
        path: "config",
        activeIcon: settingsActive,
        defaultPath: "global",
        children: {
          global: {
            path: "config/global",
            name: "Global Configuration",
          },
          allowances: {
            path: "config/allowances",
            name: "Allowances Management",
          },
          esicConfiguration: {
            path: "config/esicConfiguration",
            name: "ESIC Configuration",
          },
          minWagesConfiguration: {
            path: "config/minWagesConfiguration",
            name: "Min Wages Configuration",
          },
          groups: {
            path: "config/groups",
            name: "Groups Management",
          },
          access: {
            path: "config/access",
            name: "Access Management",
          },
          freeze: {
            path: "config/freeze",
            name: "Common Freeze",
          },
          payout: {
            path: "config/payout",
            name: "Payouts",
          },
          location: {
            path: "config/location",
            name: "Office Locations",
          },
          department: {
            path: "config/department",
            name: "Departments",
          },
          designation: {
            path: "config/designation",
            name: "Designations",
          },
          status: {
            path: "config/status",
            name: "Status",
          },
          iplocation: {
            path: "config/iplocation",
            name: "Location Settings",
          },
          appAccess: {
            path: "config/apiAccess",
            name: "API access keys",
          },
        },
      },
      home: {
        label: "Home",
        icon: homeImage,
        path: "home",
        activeIcon: homeActiveImage,
        defaultPath: "dashboard",
        children: {
          dashboard: {
            name: "Dashboard",
            path: "home/dashboard",
          },
          child_organisation: {
            // TODO: Need to change the name
            name: "Mapped Organisations",
            path: "home/mapped/organisation",
          },
        },
      },
      employees: {
        label: "Employees",
        icon: User,
        path: "employee",
        activeIcon: User,
        defaultPath: "employees",
        children: {
          employees: {
            name: "Employees",
            path: "employee/employees",
          },
          dataSync: {
            name: "Sync Employee Data",
            path: "employee/data_sync",
          },
        },
      },
      payroll: {
        label: "Payroll",
        icon: payroll,
        path: "payroll",
        activeIcon: payrollActive,
        defaultPath: "history",
        children: {
          history: {
            name: "Payroll History",
            path: "payroll/history",
          },
          reimbursement: {
            name: "Reimbursement",
            path: "payroll/reimbursement",
          },
          payroll_inputs: {
            name: "Payroll Inputs",
            path: "payroll/payroll_inputs",
          },
          taxSettlement: {
            name: "Income Tax Settlement",
            path: "payroll/tax-settlement",
          },
          separation: {
            name: "Separation",
            path: "payroll/separation",
          },
        },
      },
      reports: {
        label: "Reports",
        icon: reports,
        path: "reports",
        activeIcon: ReportsActive,
        defaultPath: "report",
        children: {
          report: {
            name: "Reports",
            path: "reports/report",
          },
          ComplianceReport: {
            name: "Compliance Reports",
            path: "reports/compliance",
          },
          customReports: {
            name: "Custom Reports",
            path: "reports/custom",
          },
        },
      },
      payouts: {
        label: "Payout",
        icon: payouticon,
        path: "payout",
        activeIcon: payoutsActive,
        defaultPath: "beneficiary",
        children: {
          beneficiary: {
            name: "Beneficiary",
            path: "payout/beneficiary",
          },
          test_verification: {
            name: "Test Payouts",
            path: "payout/test_payouts",
          },
          transactionHistory: {
            name: "Transaction History",
            path: "payout/transactions",
          },
        },
      },
      attendance: {
        label: "Attendance",
        icon: attendance,
        path: "attendance",
        activeIcon: attendanceActive,
        defaultPath: "settings",
        children: {
          settings: {
            name: "Settings",
            path: "attendance/settings",
          },
          attendance: {
            name: "Attendance",
            path: "attendance/attendance",
          },
          leave: {
            name: "Leave",
            path: "attendance/leave",
          },
        },
      },
      utility: {
        label: "Tools",
        icon: utilityIcon,
        path: "utility",
        activeIcon: utilityIcon,
        defaultPath: "ctc_calculator",
        children: {
          ctc_calculator: {
            name: "Calculator",
            path: "utility/ctc_calculator",
          },
        },
      },
      perqs: {
        label: "Perquisites",
        icon: Boxes,
        path: "perqs",
        activeIcon: Boxes,
        defaultPath: "non_taxable_perqs",
        children: {
          non_taxable_perqs: {
            name: "Non Taxable",
            path: "perqs/non_taxable_perqs",
          },
          tickets: {
            name: "Free or concessional tickets",
            path: "perqs/tickets",
          },
          gas_electricity_water: {
            name: "Gas, Electricity and Water ",
            path: "perqs/gas_electricity_water",
          },
          valuation: {
            name: "Other Fringe Benefits",
            path: "perqs/valuation",
          },
          C_E_perqs: {
            name: "Free Education Facilities",
            path: "perqs/C_E_perqs",
          },
          equity_shares: {
            name: "Equity Shares",
            path: "perqs/equity_shares",
          },
          residential_accomodation: {
            name: "Residential Accomodation",
            path: "perqs/residential_accomodation",
          },
          motor_car: {
            name: "Motor Car",
            path: "perqs/motor_car",
          },
          domestic_servants_perqs: {
            name: "Domestic Servants",
            path: "perqs/domestic_servants_perqs",
          },
          specifiedEmployees: {
            name: "Specified Employees",
            path: "perqs/specified_employees",
          },
        },
      },
      common: {
        label: "Account & Activity",
        icon: commonIcon,
        path: "common",
        activeIcon: commonIcon,
        defaultPath: "profile",
        children: {
          profile: {
            name: "Profile",
            path: "common/profile",
          },
          support: {
            name: "Support",
            path: "common/support",
          },
          broadcast: {
            name: "Broadcast",
            path: "common/broadcast",
          },
        },
      },
    },
  },
  employee: {
    path: "employee",
    defaultSelections: "home",
    routes: {
      home: {
        label: "Home",
        icon: homeImage,
        path: "home",
        activeIcon: homeActiveImage,
        defaultPath: "dashboard",
        children: {
          dashboard: {
            name: "Home",
            path: "home/dashboard",
          },
          documents: {
            name: "Employee Documents",
            path: "home/documents",
          },
        },
      },
      salary: {
        label: "Salary",
        icon: CoinsIcon,
        path: "salary",
        activeIcon: CoinsIcon,
        defaultPath: "salary_manage",
        children: {
          salary_manage: {
            name: "Manage Salary",
            path: "salary/salary_manage",
          },
          reimbursement: {
            path: "salary/reimbursement",
            name: "Reimbursement",
          },
        },
      },
      declarations: {
        label: "Declarations",
        icon: declarationIcon,
        path: "declaration",
        activeIcon: declarationIcon,
        defaultPath: "declaration",
        children: {
          declaration: {
            name: "Deductions",
            path: "declaration/declaration",
          },

          allowance: {
            name: "Allowance",
            path: "declaration/allowance",
          },
          previous_employment: {
            name: "Previous Employment",
            path: "declaration/previous_employment",
          },
          tax_projection: {
            name: "Tax projection",
            path: "declaration/tax_projection",
          },
          non_taxable: {
            name: "Non Taxable Perqs",
            path: "declaration/non_taxable",
          },
        },
      },
      attendance: {
        label: "Attendance",
        icon: attendance,
        path: "attendance",
        activeIcon: attendance,
        defaultPath: "home",
        children: {
          home: {
            name: "Attendance Home",
            path: "attendance/home",
          },
          leave_report: {
            name: "Leave Report",
            path: "attendance/leave_report",
          },
          leave_application: {
            name: "Leave Applications",
            path: "attendance/leave_application",
          },
        },
      },
      common: {
        label: "Account & Activity",
        icon: calculator,
        path: "common",
        activeIcon: calculator,
        defaultPath: "profile",
        children: {
          profile: {
            name: "Profile",
            path: "common/profile",
          },
          support: {
            name: "Support",
            path: "common/support",
          },
          broadcast: {
            name: "Broadcast",
            path: "common/broadcast",
          },
        },
      },
    },
  },
};

const paths = {
  org: {
    dashboard: "/org/home/dashboard",
    employee: "/org/employee/employees",
    dataSync: "/org/employee/data_sync",
    employee_details: "/org/employee/employee_details",
    employeeAddition: "/org/employee/add-multiple-employees",
    ZeroState: "/org/home/zero_state",
    payroll_history: "/org/payroll/history",
    reimbursement: "/org/payroll/reimbursement",
    arreares_bonuses: "/org/payroll/arreares_bonuses",
    taxSettlement: "/org/payroll/tax-settlement",
    separation: "/org/payroll/separation",
    process: "/org/payroll/process",
    settlement: "/org/payroll/final_settlement",
    employee_allowance: "/org/payroll/employee_allowance",
    employee_deduction: "/org/payroll/employee_deduction",
    report: "/org/reports/report",
    ComplianceReport: "/org/reports/compliance",
    customReports: "/org/reports/custom",
    reportsTable: "/org/reports/table",
    customReportTable: "/org/reports/custom/table",
    investement_and_allowance: "/org/common/investement_and_allowance",
    transactionHistory: "/org/payout/transactions",
    beneficiary: "/org/payout/beneficiary",
    test_verification: "/org/payout/test_payouts",
    profile: "/org/common/profile",
    ctcCalculator: "/org/utility/ctc/calculator",
    support: "/org/common/support",
    global: "/org/config/global",
    allowances: "/org/config/allowances",
    groups: "/org/config/groups",
    access: "/org/config/access",
    freeze: "/org/config/freeze",
    payout: "/org/config/payout",
    location: "/org/config/location",
    department: "/org/config/department",
    designation: "/org/config/designation",
    status: "/org/config/status",
    broadcast: "/org/common/broadcast",
    appAccess: "/org/config/apiAccess/",
    iplocation: "/org/config/iplocation",
    esicConfiguration: "/org/config/esicConfiguration/",
    minWagesConfiguration: "/org/config/minWagesConfiguration/",
    addApplicationToAPIAccess: "/org/config/addApplicationToAPIAccess",
  },
  employee: {
    dashboard: "/employee/home/dashboard",
    documents: "/employee/home/documents",

    // Salary related Component routes
    salary_manage: "/employee/salary/salary_manage",
    reimbursement: "/employee/salary/reimbursement",

    // Declaration routes
    declaration: "/employee/declaration/declaration",
    allowance: "/employee/declaration/allowance",
    previous_employment: "/employee/declaration/previous_employment",
    tax_projection: "/employee/declaration/tax_projection",

    login_flow: "/employee/login/flow",

    // Common functionality
    support: "/employee/common/support",
    profile: "/employee/common/profile",
    broadcast: "/employee/common/broadcast",
    ZeroState: "/employee/common/zero",

    // Employee Attendance
    home: "/employee/attendance/home",
    leave_report: "/employee/attendance/leave_report",
    leave_application: "/employee/attendance/leave_application",
  },
  common: {},
};

const categoryMappring = {
  org: {
    dashboard: "home",
    employees: "home",
    data_sync: "home",
    employeeAddition: "home",
    ZeroState: "home",
    payroll_history: "payroll",
    reimbursement: "payroll",
    arreares_bonuses: "payroll",
    taxSettlement: "payroll",
    separation: "payroll",
    process: "payroll",
    settlement: "payroll",
    employee_allowance: "payroll",
    employee_deduction: "payroll",
    report: "reports",
    ComplianceReport: "reports",
    customReports: "reports",
    reportsTable: "reports",
    customReportTable: "reports",
    investement_and_allowance: "common",
    transactionHistory: "payout",
    beneficiary: "payout",
    support: "common",
    profile: "common",
    ctcCalculator: "utility",
    global: "config",
    allowances: "config",
    groups: "config",
    access: "config",
    freeze: "config",
    payout: "config",
    location: "config",
    department: "config",
    designation: "config",
    status: "config",
    appAccess: "config",
    esicConfiguration: "config",
    minWagesConfiguration: "config",
    addApplicationToAPIAccess: "config",
  },
  employee: {
    dashboard: "home",
    documents: "home",

    // Salary related Component routes
    salary_manage: "salary",
    reimbursement: "salary",

    // Declaration routes
    declaration: "declarations",
    allowance: "declarations",
    tax_projection: "declarations",
    hra: "declarations",

    login_flow: "login",

    // Common functionality
    support: "common",
    profile: "common",
    ZeroState: "common",
    EmpBroadcastMessage: "common",

    // Employee Attendance
    home: "attendance",
    leave_report: "attendance",
    leave_application: "attendance",
  },
  common: {},
};

export { routes, navigator, paths, accessRoutes, categoryMappring };
