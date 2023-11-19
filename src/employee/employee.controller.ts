import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from 'src/dto/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dto/update-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  Create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.Create(createEmployeeDto);
  }

  @Get()
  FindAll() {
    return this.employeeService.FindAll();
  }

  @Get(':id')
  FindOne(@Param('id') id: string) {
    return this.employeeService.FindOne(id);
  }

  @Put(':id')
  Update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ) {
    return this.employeeService.Update(id, updateEmployeeDto);
  }

  @Delete(':id')
  Remove(@Param('id') id: string) {
    return this.employeeService.Remove(id);
  }
}
