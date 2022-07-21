var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('John', 'Doe', 25);
console.log(person.getFullName());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, middleName, firstName, lastName, age) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.id = id;
        _this.middleName = middleName;
        return _this;
    }
    Object.defineProperty(Employee.prototype, "employeeId", {
        get: function () {
            return this.id;
        },
        set: function (employeeId) {
            this.id = employeeId;
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.getFullName = function () {
        //* If using data modifier - protected 
        //* const nameSegments: Array<string> = super.getFullName().split(' ');
        //* nameSegments.splice(1, 0, this.middleName);
        //* const fullName = nameSegments.join(' ');
        //* return `${fullName}`;
        //* using protected - can reach all the classes normally
        return "".concat(this.firstName, " ").concat(this.middleName, " ").concat(this.lastName);
    };
    return Employee;
}(Person));
var manager = new Employee(1, 'Middle', 'John', 'Last', 25);
console.log("".concat(manager.getFullName()));
//* Get
console.log(manager.employeeId);
//* Set
manager.employeeId = 20;
console.log(manager.employeeId);
