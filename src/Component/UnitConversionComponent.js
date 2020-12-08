import React, {Component} from 'react';
import {View, Text, TextInput,} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import unitConversionBlockStyles from '../Style/unitConversionBlockStyles';
import Styles from '../Style/Styles';
export default class UnitConversionBlock extends Component {
    constructor(props) {
        super(props)
    }

    state = {
        lengthUnits: ['Milli Meter', 'Centi Meter', 'Meter', 'Kilo Meter', 'Inch', 'Foot', 'Yard'],
        lengthValues: ['1', '10', '1000', '1000000', '25.4', '304.8', '914.4'],
        tempertureUnits: ['Celsius', 'FahrenHeit', 'Kelvin'],
        tempertureValues: ['C', 'F', 'K'],
        volumeUnits: ['Milli Litre', 'Litre', 'Gallon', 'Cubic Meter', 'Cubic Centi Meter', 'Cubic Mill Miter'],
        volumeValues: ['1', '1000', '3785', '1000000', '1.0', '0.001'],
        selectedInputUnit: 0,
        selectedOutputUnit: 0,
        enteredValue: '0',
        outputValue : '',
    } 

    inputUnitHandler = async (selectedInputUnitType) => {
        await this.setState({
            selectedInputUnit: selectedInputUnitType
        })
        this.inputValueHandler(this.state.enteredValue)

    }

    outputUnitHandler = async (selectedOutputUnitType) => {
        await this.setState({
            selectedOutputUnit: selectedOutputUnitType
        })    
        this.inputValueHandler(this.state.enteredValue)
    }

    inputValueHandler = async (value) => {
        await this.setState({
            enteredValue: value
        })
        if(this.props.type == 'Length') {
            var inputUnit = parseFloat(this.state.selectedInputUnit);
            var outputUnit = parseFloat(this.state.selectedOutputUnit);
            var valueEntered = parseFloat(this.state.enteredValue);

            this.setState({
                outputValue: (valueEntered * this.state.lengthValues[inputUnit]) / this.state.lengthValues[outputUnit]
            })
        }
        else if(this.props.type == 'Volume') {
            var inputUnit = parseFloat(this.state.selectedInputUnit);
            var outputUnit = parseFloat(this.state.selectedOutputUnit);
            var valueEntered = parseFloat(this.state.enteredValue);

            this.setState({
                outputValue: (valueEntered * this.state.volumeValues[inputUnit]) / this.state.volumeValues[outputUnit]
            })
        }
        else if(this.props.type == 'Temperature') {
            var valueEntered = parseFloat(this.state.enteredValue);
            var inputUnit = this.state.tempertureValues[this.state.selectedInputUnit];
            var outputUnit = this.state.tempertureValues[this.state.selectedOutputUnit];

            if(inputUnit === 'C' && outputUnit === 'F') {
                this.setState({
                    outputValue: (valueEntered * 1.8) + 32
                })
            }
            else if(inputUnit === 'C' && outputUnit === 'K') {
                this.setState({
                    outputValue: valueEntered + 273.15
                })
            }
            else if(inputUnit === 'F' && outputUnit === 'C') {
                this.setState({
                    outputValue: (valueEntered - 32) * ( 5 / 9)
                })
            }
            else if(inputUnit === 'F' && outputUnit === 'K') {
                this.setState({
                    outputValue: (valueEntered - 32) * (5 / 9) + 273.15
                })
            }
            else if(inputUnit === 'K' && outputUnit === 'C') {
                this.setState({
                    outputValue: valueEntered - 273.15 
                })
            }
            else if(inputUnit === 'K' && outputUnit === 'F') {
                this.setState({
                    outputValue: (valueEntered - 273.15 ) * (9 / 5) + 32
                })
            }
            else if(inputUnit === outputUnit)
                this.setState({
                    outputValue: valueEntered
                })
        }
         
        var outputValueToFormat = this.state.outputValue;
        this.setState({
            outputValue: Number(Math.round(outputValueToFormat+'e4')+'e-4')
        })
    }

    render() {
        return (
            <View style = {unitConversionBlockStyles.container}>
                <Text style = {unitConversionBlockStyles.from_To}>From :</Text>
                <View style = {{flexDirection: 'column'}}>
                <TextInput 
                        placeholder = {'Enter Input'}
                        placeholderTextColor = '#303236'
                        onChangeText = {(value) => this.inputValueHandler(value)}
                        style = {unitConversionBlockStyles.text_input}
                    />  
                    <View style = {unitConversionBlockStyles.picker_Style}>
                        <Picker
                            selectedValue = {this.state.selectedInputUnit}
                            onValueChange = {(selectedUnit) => this.inputUnitHandler(selectedUnit)}
                            mode = "dropdown">
                                
                                { (this.props.type == 'Length') ? 
                                    this.state.lengthUnits.map((unit, index) => { 
                                        return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                    }) : (this.props.type == 'Temperature') ? 
                                            this.state.tempertureUnits.map((unit, index) => { 
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            }) : this.state.volumeUnits.map((unit, index) => {
                                                    return (<Picker.Item label = {unit} value = {index} key = {unit}/>)})
                                }
                            
                        </Picker>
                    </View> 
                </View>

                <Text style = {unitConversionBlockStyles.from_To}>To :</Text>
                <View style = {{flexDirection: 'column'}}>
                <TextInput 
                        placeholder = {'Output'}
                        value = {(this.state.outputValue.toString() != 'NaN') ? this.state.outputValue.toString() : '0'}
                        editable = {false}
                        style = {unitConversionBlockStyles.text_input}
                        
                    />  
                    <View style = {unitConversionBlockStyles.picker_Style}>
                        <Picker
                            selectedValue = {this.state.selectedOutputUnit}
                            onValueChange = {(selectedUnit) => this.outputUnitHandler(selectedUnit)}
                            mode = "dropdown">
                                
                                { (this.props.type == 'Length') ? 
                                    this.state.lengthUnits.map((unit, index) => { 
                                        return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                    }) : (this.props.type == 'Temperature') ? 
                                            this.state.tempertureUnits.map((unit, index) => { 
                                                return (<Picker.Item label = {unit} value = {index} key = {unit}/>)
                                            }) : this.state.volumeUnits.map((unit, index) => {
                                                    return (<Picker.Item label = {unit} value = {index} key = {unit}/>)})
                                }
                            
                        </Picker>
                    </View> 
                </View>
            </View>
        )
    }
}
