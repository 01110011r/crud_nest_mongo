import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { log } from 'console';
import { Model } from 'mongoose';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';
import { Employee, EmployeeDocument } from 'src/schema/employee.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private readonly employeeModel: Model<EmployeeDocument>,
  ) {}

  async Create(
    createEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeDocument> {
    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }

  async FindAll(): Promise<EmployeeDocument[]> {
    return this.employeeModel.find().exec();
  }

  async FindOne(id: string): Promise<EmployeeDocument> {
    return this.employeeModel.findById(id);
  }

  async Update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<EmployeeDocument> {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto);
  }

  async Remove(id: string) {
    log(id);
    return this.employeeModel.findByIdAndDelete(id);
  }
}
