'use client';

import { useState } from 'react';
import { useStudents } from '@/hooks/useStudents';
import { Student } from '@/types/student';
import { StudentTable } from '@/components/StudentTable';
import { StudentModal } from '@/components/StudentModal';
import { StudentDeleteModal } from '@/components/StudentDeleteModal';
import { Plus, Download } from 'lucide-react';
import * as xlsx from 'xlsx';
import { toast } from 'react-hot-toast';

export default function Home() {
  const { students, isLoading, isActionLoading, addStudent, updateStudent, deleteStudent } = useStudents();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | undefined>(undefined);

  const handleOpenModal = (student?: Student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedStudent(undefined);
    setIsModalOpen(false);
  };

  const handleOpenDelete = (student: Student) => {
    setSelectedStudent(student);
    setIsDeleteModalOpen(true);
  };

  const exportToExcel = () => {
    if (students.length === 0) {
      toast.error('No data to export');
      return;
    }
    try {
      const worksheet = xlsx.utils.json_to_sheet(students.map(s => ({
        Name: s.name,
        Email: s.email,
        Age: s.age
      })));
      const workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, worksheet, 'Students');
      xlsx.writeFile(workbook, 'StudentsList.xlsx');
      toast.success('Downloaded successfully!');
    } catch (err) {
      toast.error('Failed to download Excel file');
    }
  };

  return (
    <main className="container animate-fade-in">
      <header className="header">
        <h1 className="title">Students</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={exportToExcel} className="btn btn-secondary" disabled={isLoading || students.length === 0}>
            <Download size={20} />
            Export
          </button>
          <button onClick={() => handleOpenModal()} className="btn btn-primary" disabled={isLoading}>
            <Plus size={20} />
            Add Student
          </button>
        </div>
      </header>

      {isLoading ? (
        <div className="empty-state">
          <div className="loader" style={{ width: '3rem', height: '3rem' }}></div>
          <p style={{ marginTop: '1rem' }}>Loading students...</p>
        </div>
      ) : (
        <StudentTable 
          students={students} 
          onEdit={handleOpenModal} 
          onDelete={handleOpenDelete} 
        />
      )}

      {isModalOpen && (
        <StudentModal 
          student={selectedStudent} 
          onClose={handleCloseModal} 
          onSubmit={selectedStudent ? (data) => updateStudent(selectedStudent.id, data) : addStudent} 
          isActionLoading={isActionLoading} 
        />
      )}

      {isDeleteModalOpen && selectedStudent && (
        <StudentDeleteModal 
          student={selectedStudent} 
          onClose={() => setIsDeleteModalOpen(false)} 
          onConfirm={() => {
            deleteStudent(selectedStudent.id);
            setIsDeleteModalOpen(false);
          }} 
          isActionLoading={isActionLoading} 
        />
      )}
    </main>
  );
}
