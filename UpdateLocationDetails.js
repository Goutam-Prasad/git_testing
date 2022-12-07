import { Spin, Modal, notification } from "antd";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import { updateEmployeeCoordinates } from "../../../apis/organisation";
import { createLog } from "../../../apis/user";
import { NormalButton } from "../../ComponentLibrary";
import InputFieldComponent from "../../InputLibrary/InputFieldComponent/InputFieldComponent";

const errorDataState = {
  latitude: false,
  longitude: false,
  distanceInMeters: false,
};

const errorMessages = {
  id: "",
  latitude: "",
  longitude: "",
  distanceInMeters: "",
};

const UpdateLocationDetails = ({
  modalProperties,
  user,
  setModalProperties,
  resetModals,
  organisationReducer,
  setUpdateSelectedEmployee,
}) => {
  const [employeeData, setEmployeeData] = useState({
    id: "",
    longitude: "",
    latitude: "",
    distanceInMeters: "",
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
        // ip: user.ip,
        latitude: user?.coordinates?.latitude || "",
        longitude: user?.coordinates?.longitude || "",
        distanceInMeters: user?.coordinates?.distanceInMeters || "",
      });
    }
  }, [user]);
  const resetDetails = () => {
    setEmployeeData({
      id: "",
      latitude: "",
      longitude: "",
      distanceInMeters: "",
      name: "",
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
      parseInt(employeeData.longitude) < -180 ||
      parseInt(employeeData.longitude) > 180 ||
      employeeData.longitude === ""
    ) {
      localError = true;
      errors.longitude = true;
      errorMessagesDemo.longitude = "Please enter a valid longitude";
    }
    if (!/^\d+$/.test(employeeData.distanceInMeters)) {
      localError = true;
      errors.distanceInMeters = true;
      errorMessagesDemo.distanceInMeters =
        "Please enter a valid distance(in meters)";
    }
    if (
      parseInt(employeeData.latitude) < -90 ||
      parseInt(employeeData.latitude) > 90 ||
      employeeData.latitude === ""
    ) {
      localError = true;
      errors.latitude = true;
      errorMessagesDemo.latitude = "Please enter a valid latitude";
    }
    if (localError) {
      setErrorMessage({ ...errorMessagesDemo });
      setError({ ...errors });
      return;
    }
    let modalProps = modalProperties;
    modalProps.employeeLocation.loading = true;
    setModalProperties({ ...modalProps });
    let coordinates = {
      latitude: employeeData.latitude,
      longitude: employeeData.longitude,
      distanceInMeters: employeeData.distanceInMeters,
    };
    let res = await updateEmployeeCoordinates({
      id: employeeData.id,
      coordinates,
    });
    // let res = await updateEmployeeDetails();
    if (res.data.success) {
      await createLog({
        name: user.displayName,
        userId: user._id,
        organisationId: user.organisationId,
        message: `Organiation User has updated ${user.displayName}'s details`,
        category: 16,
      });
      notification.success({
        message: `Successfully updated the employee`,
      });
    } else {
      notification.error({
        message: `Sorry Unable to update the employee`,
      });
    }
    organisationReducer.updateEmployeeList({
      organisationId: user.organisationId,
    });
    resetDetails();
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
      visible={modalProperties.employeeLocation.visible}
      className="modal-container"
      footer={null}
    >
      <Spin spinning={modalProperties.employeeLocation.loading} size="large">
        <Content className={"modal-body"}>
          <h1 className="font-weight-global-700 font-size-global-24 modal-margin-left-global-heading">
            Edit location of Employee
          </h1>
          <div
            style={{ marginTop: "2em" }}
            className="org-data-container modal-alignment-center-global "
          ></div>
          <div className="org-data-container modal-alignment-center-global modal-margin-top-reduce-global-1">
            <InputFieldComponent
              value={employeeData.latitude}
              labeltext={"Latitude"}
              className="general-input-field"
              placeholder="Latitude"
              bordered={false}
              onChange={(e) =>
                setSingleEmployeeData("latitude", e.target.value)
              }
              size={"large"}
            />
            {error.latitude && (
              <p className="error m-top-minus-1">{errorMessage.latitude}</p>
            )}
          </div>
          <div className="org-data-container modal-alignment-center-global modal-margin-top-reduce-global-1">
            <InputFieldComponent
              value={employeeData.longitude}
              labeltext={"Longitude"}
              className="general-input-field"
              placeholder="Longitude"
              bordered={false}
              onChange={(e) =>
                setSingleEmployeeData("longitude", e.target.value)
              }
              size={"large"}
            />
            {error.longitude && (
              <p className="error m-top-minus-1">{errorMessage.longitude}</p>
            )}
          </div>
          <div className="org-data-container modal-alignment-center-global modal-margin-top-reduce-global-1">
            <InputFieldComponent
              value={employeeData.distanceInMeters}
              labeltext={"Distance in meters"}
              className="general-input-field"
              placeholder="Distance in meters"
              bordered={false}
              onChange={(e) =>
                setSingleEmployeeData("distanceInMeters", e.target.value)
              }
              size={"large"}
            />
            {error.distanceInMeters && (
              <p className="error m-top-minus-1">
                {errorMessage.distanceInMeters}
              </p>
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

export default UpdateLocationDetails;
