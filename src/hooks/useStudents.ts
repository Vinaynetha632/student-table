'use client';

import { useState, useEffect } from 'react';
import { Student } from '@/types/student';
import { toast } from 'react-hot-toast';

const STORAGE_KEY = 'students_data';

export function useStudents() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isActionLoading, setIsActionLoading] = useState<boolean>(false);

  // Initial load
  useEffect(() => {
    // Simulate initial network delay
    const loadData = setTimeout(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setStudents(JSON.parse(stored));
        } else {
          // Provide some initial dummy data for presentation
          const initialData: Student[] = [
            { id: '1', name: 'Alice Johnson', email: 'alice@example.com', age: 22 },
            { id: '2', name: 'Bob Smith', email: 'bob@example.com', age: 24 },
            { id: '3', name: 'Charlie Davis', email: 'charlie@example.com', age: 21 },
          ];
          setStudents(initialData);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
        }
      } catch (error) {
        console.error('Failed to parse stored students', error);
        toast.error('Failed to load local data');
      } finally {
        setIsLoading(false);
      }
    }, 800);

    return () => clearTimeout(loadData);
  }, []);

  // Save changes to localStorage
  const saveToStorage = (newStudents: Student[]) => {
    setStudents(newStudents);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newStudents));
  };

  const addStudent = async (student: Omit<Student, 'id'>) => {
    setIsActionLoading(true);
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    const newStudent: Student = {
      ...student,
      id: crypto.randomUUID(),
    };
    
    saveToStorage([...students, newStudent]);
    setIsActionLoading(false);
    toast.success('Student added successfully!');
  };

  const updateStudent = async (id: string, updatedData: Partial<Student>) => {
    setIsActionLoading(true);
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    const updatedStudents = students.map((s) => 
      s.id === id ? { ...s, ...updatedData } : s
    );
    
    saveToStorage(updatedStudents);
    setIsActionLoading(false);
    toast.success('Student updated successfully!');
  };

  const deleteStudent = async (id: string) => {
    setIsActionLoading(true);
    
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 600));
    
    const remainingStudents = students.filter((s) => s.id !== id);
    saveToStorage(remainingStudents);
    setIsActionLoading(false);
    toast.success('Student deleted successfully!');
  };

  return {
    students,
    isLoading,
    isActionLoading,
    addStudent,
    updateStudent,
    deleteStudent
  };
}
