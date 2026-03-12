import { useState, useEffect } from 'react';
import { Student } from '@/types/student';
import { X, Save } from 'lucide-react';

interface Props {
  student?: Student;
  onClose: () => void;
  onSubmit: (data: Omit<Student, 'id'>) => Promise<void>;
  isActionLoading: boolean;
}

export function StudentModal({ student, onClose, onSubmit, isActionLoading }: Props) {
  const [formData, setFormData] = useState({
    name: student?.name || '',
    email: student?.email || '',
    age: student?.age?.toString() || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0) {
      newErrors.age = 'Age must be a valid positive number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      await onSubmit({
        name: formData.name.trim(),
        email: formData.email.trim(),
        age: Number(formData.age),
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{student ? 'Edit Student' : 'Add New Student'}</h2>
          <button onClick={onClose} className="btn-icon modal-close" disabled={isActionLoading}>
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label className="form-label">Name</label>
            <input 
              className="form-input" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="e.g. John Doe"
              disabled={isActionLoading}
              autoFocus
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input 
              className="form-input" 
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="e.g. john@example.com"
              disabled={isActionLoading}
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label className="form-label">Age</label>
            <input 
              className="form-input" 
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({...formData, age: e.target.value})}
              placeholder="e.g. 21"
              disabled={isActionLoading}
            />
            {errors.age && <p className="form-error">{errors.age}</p>}
          </div>
          
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="btn btn-secondary" disabled={isActionLoading}>
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" disabled={isActionLoading}>
              {isActionLoading ? <span className="loader" style={{width: '18px', height: '18px', borderWidth: '2px'}}></span> : <Save size={18} />}
              {student ? 'Save Changes' : 'Create Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
