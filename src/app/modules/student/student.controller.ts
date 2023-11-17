import { Request, Response } from 'express';
import { StudentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //will call service function to send data

    const result = await StudentServices.createStudentIntoDB(studentData);

    //send response

    res.status(200).json({
      success: true,
      message: 'Student is created successfully !',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Student creation failed !',
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All students retrieval successful !',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Students retrieval failed !',
    });
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.getOneStudentByIdFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student retrieval successful !',
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Student retrieval failed !',
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getStudentById,
};
