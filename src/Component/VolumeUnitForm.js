import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,

} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from '../Style/styles';

export default class VolumeUnitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FirstUnit: 0,
            SecondUnit: 0,
            firstUnitValue: 0,
            secondUnitValue: 0,
            convertedVal: 0
        }
    }

    convertFirstUnitToSecond = async () => {
        var firtsUnit = this.state.FirstUnit;
        var firstValue = this.state.firstUnitValue;
        var secondUnit = this.state.SecondUnit;
        await this.setState({
            secondUnitValue: firtsUnit * firstValue / secondUnit
        })
        console.log("second unit" + this.state.secondUnitValue);
    }

    handleFirstUnitState = async (firstUnitValue) => {

        await this.setState({
            firstUnitValue: firstUnitValue,
        })
        this.convertFirstUnitToSecond();
        console.log(this.state.firstUnitValue);
    }

    handleSecondUnitState = async (secondUnitValue) => {
        await this.setState({
            secondUnitValue: secondUnitValue
        })
        console.log(secondUnitValue);
    }

    render() {
        return (
            <View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}> To: </Text>
                    <TextInput style={styles.input}
                        onChangeText={this.handleFirstUnitState}
                        value={this.state.firstUnitValue.toString()} />

                    <DropDownPicker
                        items={[
                            { label: 'GALLON', value: 3.78 },
                            { label: 'LITER', value: 1 },
                            { label: 'MILLI_LITER', value: 2.5 },
                        ]}

                        containerStyle={{ height: 40, width: '95%' }}
                        style={styles.dropdown_Style}
                        onChangeItem={item => this.setState({
                            FirstUnit: parseFloat(item.value)
                        })}
                    />

                    <Text style={styles.label}>From :</Text>
                    <TextInput style={styles.input}
                        value="Read Only"
                        editable={false}
                        value={this.state.secondUnitValue.toString()}
                    />
                    <DropDownPicker
                        items={[

                            { label: 'GALLON', value: 3.78 },
                            { label: 'LITER', value: 1 },
                            { label: 'MILLI_LITER', value: 2.5 },
                            { label: 'CM', value: 0.001 }
                        ]}
                        containerStyle={{ height: 40, width: '95%' }}
                        style={styles.dropdown_Style}
                        onChangeItem={item => this.setState({
                            SecondUnit: item.value
                        })}
                    />
                </View>
            </View>
        )
    }
}
