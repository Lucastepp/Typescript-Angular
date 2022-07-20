import { add, subtract, multiply, divide } from './math.util'

// Importing everything using * and setting an alias
import * as math from './math.util'

export function generatePayslip() {
    console.log('Generated payslip')
}

 export function calculateSalary() {
    add(1, 2);
    console.log('Calculated Salary!')
}

 export function log() {
    console.log('Logged from employee service!')
}