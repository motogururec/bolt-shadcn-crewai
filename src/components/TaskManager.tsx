import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Research market trends', completed: false },
    { id: 2, name: 'Analyze competitor strategies', completed: true },
    { id: 3, name: 'Draft product roadmap', completed: false },
  ]);
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName.trim() !== '') {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, name: newTaskName, completed: false },
      ]);
      setNewTaskName('');
    }
  };

  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Task Manager</h2>
      <div className="flex space-x-2">
        <div className="flex-grow">
          <Label htmlFor="new-task" className="sr-only">
            New Task
          </Label>
          <Input
            id="new-task"
            placeholder="Enter new task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        </div>
        <Button onClick={addTask}>Add Task</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">Done</TableHead>
            <TableHead>Task</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox
                  checked={task.completed}
                  onCheckedChange={() => toggleTaskCompletion(task.id)}
                />
              </TableCell>
              <TableCell className={task.completed ? 'line-through' : ''}>
                {task.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}