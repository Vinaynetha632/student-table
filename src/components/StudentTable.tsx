import { Student } from '@/types/student';
import { Edit2, Trash2, Users } from 'lucide-react';

interface Props {
  students: Student[];
  onEdit: (student: Student) => void;
  onDelete: (student: Student) => void;
}

export function StudentTable({ students, onEdit, onDelete }: Props) {
  if (students.length === 0) {
    return (
      <div className="empty-state glass-panel">
        <Users size={48} style={{ opacity: 0.5, margin: '0 auto 1rem' }} />
        <h3>No students found</h3>
        <p>Get started by adding a new student.</p>
      </div>
    );
  }

  return (
    <div className="table-container animate-fade-in">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th style={{ textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td style={{ fontWeight: 500 }}>{student.name}</td>
              <td style={{ color: 'var(--text-secondary)' }}>{student.email}</td>
              <td>{student.age}</td>
              <td style={{ textAlign: 'right' }}>
                <button 
                  onClick={() => onEdit(student)} 
                  className="btn-icon edit" 
                  aria-label="Edit student"
                  title="Edit"
                >
                  <Edit2 size={18} />
                </button>
                <button 
                  onClick={() => onDelete(student)} 
                  className="btn-icon delete" 
                  aria-label="Delete student"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
