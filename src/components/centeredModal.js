import { StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { color } from "../styles/palette";
import Row from "./row";
import CustomNumericInput from "./customNumericInput";
import Spacing from "./spacing";
import PrimaryButton from "./primaryButton";
import ButtonText from "./buttonText";

const CenteredModal = ({ visible, requestClose, onClose }) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={requestClose}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Row>
              <CustomNumericInput
                title="mês"
                minValue={0}
                maxValue={12}
                onChange={(val) => {
                  setMonth(val);
                }}
              />
              <Spacing width={16} />
              <CustomNumericInput
                title="ano"
                minValue={2000}
                maxValue={2025}
                onChange={(val) => {
                  setYear(val);
                }}
              />
            </Row>
            <Spacing height={16} />
             <ButtonText onPress={onClose}>concluir</ButtonText>     
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CenteredModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: color.primary[500],
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
