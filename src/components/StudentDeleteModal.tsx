import { Student } from '@/types/student';
import { X, Trash2 } from 'lucide-react';

interface Props {
  student: Student;
  onClose: () => void;
  onConfirm: () => void;
  isActionLoading: boolean;
}

export function StudentDeleteModal({ student, onClose, onConfirm, isActionLoading }: Props) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Delete Student</h2>
          <button onClick={onClose} className="btn-icon modal-close" disabled={isActionLoading}>
            <X size={24} />
          </button>
        </div>
        <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
          Are you sure you want to delete <strong style={{ color: 'var(--text-primary)'}}>{student.name}</strong>? This action cannot be undone.
        </p>
        <div className="modal-actions">
          <button type="button" onClick={onClose} className="btn btn-secondary" disabled={isActionLoading}>
            Cancel
          </button>
          <button type="button" onClick={onConfirm} className="btn btn-danger" disabled={isActionLoading}>
            {isActionLoading ? <span className="loader" style={{width: '18px', height: '18px', borderWidth: '2px'}}></span> : <Trash2 size={18} />}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
