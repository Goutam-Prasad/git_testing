import { Spin, Modal, notification } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { checkUserExist } from "../../../apis/auth";
import { updateEmployeeIP } from "../../../apis/organisation";
import { createLog } from "../../../apis/user";
import { NormalButton } from "../../ComponentLibrary";
import InputFieldComponent from "../../InputLibrary/InputFieldComponent/InputFieldComponent";

const errorDataState = {
  ip: false,
};

const errorMessages = {
  id: "",
  ip: "",
};

const UpdateIPDetails = ({
  modalProperties,
  user,
  setModalProperties,
  resetModals,
  organisationReducer,
  setUpdateSelectedEmployee,
}) => {
  const [employeeData, setEmployeeData] = useState({
    id: "",
    ip: "",
  });
  const [error, setError] = useState({
    ...errorDataState,
  });

  const [errorMessage, setErrorMessage] = useState({
    ...errorMessages,
  });

  useEffect(() => {
    if (user) {
      setEmployeeData({
        id: user._id,
        ip: user.ip,
      });
    }
  }, [user]);
  const resetDetails = () => {
    setEmployeeData({
      id: "",
      ip: "",
    });
    setError({ ...errorDataState });
    setErrorMessage({ ...errorMessages });
    resetModals();
    setUpdateSelectedEmployee(null);
  };

  const saveDetails = async () => {
    let errors = {
      ...errorDataState,
    };
    let errorMessagesDemo = {
      ...errorMessage,
    };
    let localError = false;
    if (
      !/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/.test(
        employeeData.ip
      )
    ) {
      localError = true;
      errors.ip = true;
      errorMessagesDemo.ip = "Please enter a valid ip address";
    }
    if (localError) {
      setErrorMessage({ ...errorMessagesDemo });
      setError({ ...errors });
      return;
    }
    let modalProps = modalProperties;
    modalProps.employeeIP.loading = true;
    setModalProperties({ ...modalProps });
    let res = await updateEmployeeIP({ ...employeeData });
    if (res.data.success) {
      await createLog({
        name: user.displayName,
        userId: user._id,
        organisationId: user.organisationId,
        message: `Organiation User has updated ${user.displayName}'s details`,
        category: 16,
      });
      notification.success({
        message: `Successfully updated IP of the employee`,
      });
    } else {
      notification.error({
        message: `Sorry Unable to update IP of the employee`,
      });
    }
    organisationReducer.updateEmployeeList({
      organisationId: user.organisationId,
    });
    resetDetails();
  };

  const checkUserAvailability = async (details, type) => {
    if (type === 1 && user.ip === details) {
      return;
    }
    let res = await checkUserExist({ details, type });
    if (res.data) {
      if (type === 1) {
        setError({
          ...errorDataState,
          ip: true,
        });
        setErrorMessage({
          ...errorMessage,
          ip: `User with the ip: ${employeeData.ip} already is in a organisation`,
        });
        setEmployeeData({ ...employeeData, ip: user.ip });
      } else {
        setError({
          ...errorDataState,
        });
        setErrorMessage({
          ...errorMessages,
        });
      }
    }
  };

  const setSingleEmployeeData = (key, value) => {
    let val = value;
    if (key === "PAN") val = val.toUpperCase();
    let tempEmployeeData = employeeData;
    tempEmployeeData[key] = val;
    setEmployeeData({ ...tempEmployeeData });
  };

  return (
    <Modal
      centered
      closable={false}
      width={400}
      visible={modalProperties.employeeIP.visible}
      className="modal-container"
      footer={null}
    >
      <Spin spinning={modalProperties.employeeIP.loading} size="large">
        <Content className={"modal-body"}>
          <h1 className="font-weight-global-700 font-size-global-24 modal-margin-left-global-heading">
            Edit IP of Employee
          </h1>
          <div
            style={{ marginTop: "2em" }}
            className="org-data-container modal-alignment-center-global "
          ></div>
          <div className="org-data-container modal-alignment-center-global modal-margin-top-reduce-global-1">
            <InputFieldComponent
              value={employeeData.ip}
              labeltext={"IP"}
              className="general-input-field"
              placeholder="Employee IP"
              bordered={false}
              onBlur={() => checkUserAvailability(employeeData.ip, 1)}
              onChange={(e) => setSingleEmployeeData("ip", e.target.value)}
              size={"large"}
            />
            {error.ip && (
              <p className="error m-top-minus-1">{errorMessage.ip}</p>
            )}
          </div>
          <div className="modal-margin-left-global-1 modal-margin-top-add-global-2">
            <NormalButton
              onClick={saveDetails}
              type={13}
              buttonText={"Update"}
              className="submit-button"
              style={{
                marginRight: "0px",
                padding: "0px 24px",
              }}
            />
            <NormalButton
              onClick={resetDetails}
              type={5}
              buttonText={"Cancel"}
              className="cancel-button"
              style={{
                border: "none",
                boxShadow: "none",
                marginRight: "0px",
              }}
            />
          </div>
        </Content>
      </Spin>
    </Modal>
  );
};

export default UpdateIPDetails;
