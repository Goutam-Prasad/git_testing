import { useState, useEffect } from "react";
import { Table, Spin, Dropdown, Menu, Select, message, Space } from "antd";
import { Content } from "antd/lib/layout/layout";
import organisation from "../../redux/modules/organisation";
import { connect } from "react-redux";
import { HeaderComponent } from "../Common";
import UpdateIPDetails from "./components/UpdateIPDetails";
import UpdateLocationDetails from "./components/UpdateLocationDetails";
import actionIcon from "../../assets/icons/action.svg";

const { Option } = Select;

const EmployeeListIP = ({
  user,
  organisationReducer,
  employeeList,
  groups,
}) => {
  const [employeeData, setEmployeeData] = useState([]);
  const [employeeDisplayData, setEmployeeDisplayData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [groupId, setGroupId] = useState("all");
  const [pageState, setPageState] = useState({
    single: 0,
    delete: 0,
  });

  const [updateSelectedEmployee, setUpdateSelectedEmployee] = useState(null);

  const [modalProperties, setModalProperties] = useState({
    employeeIP: {
      visible: false,
      loading: false,
    },
    employeeLocation: {
      visible: false,
      loading: false,
    },
  });

  const resetModals = () => {
    let modalProps = modalProperties;
    modalProps.employeeIP.visible = false;
    modalProps.employeeIP.loading = false;
    modalProps.employeeLocation.visible = false;
    modalProps.employeeLocation.loading = false;
    setModalProperties({ ...modalProps });
    let newPageState = pageState;
    newPageState.single = 0;
    newPageState.delete = 0;
    setPageState({ ...newPageState });
  };

  // TODO: Declare It globally
  useEffect(() => {
    updateEmployeeList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [employeeList]);

  useEffect(() => {
    let employeeOfGroup = [];
    if (groupId === "all") {
      employeeOfGroup = [...employeeData];
    } else {
      employeeData.forEach((ed, _i) => {
        if (ed.groupId === groupId) {
          employeeOfGroup.push(ed);
        }
      });
    }
    setEmployeeDisplayData(employeeOfGroup);
  }, [groupId, employeeData]);

  useEffect(() => {
    document.title = "Employees | IPLocation";
  });
  const employeeDetails = (id) => {
    let data = employeeList.find((val) => val._id === id);
    if (!data) {
      message.error("Sorry cannot able to find the employee");
      return;
    }
    setUpdateSelectedEmployee({ ...data });
    setModalProperties({
      ...modalProperties,
      employeeIP: {
        visible: true,
        loading: false,
      },
    });
  };

  const employeeLocation = (id) => {
    let data = employeeList.find((val) => val._id === id);
    if (!data) {
      message.error("Sorry cannot able to find the employee");
      return;
    }
    setUpdateSelectedEmployee({ ...data });
    setModalProperties({
      ...modalProperties,
      employeeLocation: {
        visible: true,
        loading: false,
      },
    });
  };
  const getActionMenu = (_id) => {
    return (
      <Menu>
        <Menu.Item
          key="1"
          onClick={(e) => {
            employeeLocation(_id);
          }}
        >
          Update Location
        </Menu.Item>
        <Menu.Item key="2" onClick={() => employeeDetails(_id)}>
          Update IP
        </Menu.Item>
      </Menu>
    );
  };
  const LocationHeading = () => {
    return (
      <div style={{ marginTop: "1rem" }}>
        <span>Location</span>
        <br />
        <span style={{ fontSize: "12px" }}>
          (Lat - Long, Accuracy in meters)
        </span>
      </div>
    );
  };
  const columns = [
    {
      title: "Employee Id",
      dataIndex: "employeeId",
      defaultSortOrder: "descend",
      fixed: "left",
      width: 100,
    },
    {
      title: "Name",
      dataIndex: "displayName",
      defaultSortOrder: "descend",
      width: 200,
      fixed: "left",
      sorter: (a, b) => a.displayName.localeCompare(b.displayName),
    },
    {
      title: "IP Address",
      dataIndex: "ip",
      width: 100,
    },
    {
      title: LocationHeading,
      dataIndex: "coordinates",
      width: 250,
    },
    {
      title: "Action",
      dataIndex: "_id",
      fixed: "right",
      width: 100,
      render: (_id) => {
        const actionMenu = getActionMenu(_id);
        return (
          <Space
            size="middle"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Dropdown
              trigger={["click"]}
              overlay={actionMenu}
              placement="bottomLeft"
            >
              <div onClick={(e) => e.stopPropagation()}>
                <img src={actionIcon} alt="actionIcon" />
              </div>
            </Dropdown>
          </Space>
        );
      },
    },
  ];

  const updateEmployeeList = async () => {
    let modifiedEmployeeList = employeeList.map((val, index) => {
      let group = getGroupName(val.groupId);
      return {
        key: index,
        ...val,
        // dateOfJoining: new Date(
        //   val.currentOrganisationMeta.dateOfJoining
        // ).toLocaleDateString(),
        employeeId: val.currentOrganisationMeta.employeeId,
        groupId: val.groupId ? val.groupId : "*-",
        groupName: val.groupId
          ? group.length > 0
            ? group[0].name
            : val.groupId === "intern"
            ? "Intern / Contractor"
            : "General"
          : "General",
        coordinates: val.coordinates
          ? `${val.coordinates.latitude} N - ${val.coordinates.longitude} S, ${val.coordinates.distanceInMeters} mtrs`
          : "",
      };
    });
    setEmployeeData([...modifiedEmployeeList]);
    setEmployeeDisplayData([...modifiedEmployeeList]);
    setLoading(false);
  };

  const getGroupName = (id) => {
    return groups.filter((val) => val.groupId === id);
  };

  return (
    <div className="site-layout">
      <HeaderComponent
        show={false}
        showMoolCoins={true}
        name="IPLocation Setting "
      />
      <Content className="app-main-content-container">
        <Content className="emoloyee-list-container">
          <Content className="header-container">
            <h3 className="font-weight-global-700 font-size-global-24">
              Employees ({employeeData.length}){" "}
            </h3>
            <div className="action-container">
              <p
                style={{
                  marginRight: 8,
                  marginBottom: 4,
                }}
                className="app-label-1"
              >
                Group
              </p>
              <Select
                defaultValue="all"
                style={{
                  width: "12rem",
                  marginRight: 20,
                  fontWeight: 600,
                }}
                onChange={(e) => setGroupId(e)}
                filterOption={(input, option) =>
                  option.children &&
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                    0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
                showSearch
              >
                <Option value="all">All</Option>
                <Option value="intern">Intern / Contracter</Option>

                {groups.map((group, i) => {
                  return (
                    <Option key={`group-${i}`} value={group.groupId}>
                      {group.name}
                    </Option>
                  );
                })}
              </Select>
            </div>
          </Content>
          <Spin spinning={loading} delay={500} size={"large"}>
            <Table
              pagination={false}
              columns={columns}
              dataSource={employeeDisplayData}
              scroll={{ x: 600, y: "65vh" }}
            />
          </Spin>
          <UpdateIPDetails
            setModalProperties={setModalProperties}
            modalProperties={modalProperties}
            resetModals={resetModals}
            user={updateSelectedEmployee}
            setUpdateSelectedEmployee={setUpdateSelectedEmployee}
            organisationReducer={organisationReducer}
          />
          <UpdateLocationDetails
            setModalProperties={setModalProperties}
            modalProperties={modalProperties}
            resetModals={resetModals}
            user={updateSelectedEmployee}
            setUpdateSelectedEmployee={setUpdateSelectedEmployee}
            organisationReducer={organisationReducer}
          />
        </Content>
      </Content>
    </div>
  );
};

const EmployeeIPContainer = connect(
  (state) => ({
    user: state.auth.user,
    employeeList: state.organisation.employeeList,
    groups: state.organisation.groups,
  }),
  (dispatch) => ({
    organisationReducer: organisation.getActions(dispatch),
  })
)(EmployeeListIP);

export default EmployeeIPContainer;
