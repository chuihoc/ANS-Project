const data = [
  {
    cardId: 0,
    id: 1,
    text: 'Project #1',
    start_date: '01-04-2018',
    due_time: '02-09-2018',
    duration: 18, order: 10,
    progress: 0, open: true,
    parent: 1,
    assigned: ['hung.cv1', 'hung.cv2']
  },
  {
    cardId: 1,
    id: 2,
    text: 'Task #1',
    start_date: '02-04-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 10,
    progress: 0.9,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 1,
    id: 3,
    text: 'Task #2',
    start_date: '11-04-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 20,
    progress: 0.6,
    open: true,
    parent: 1,
    assigned: ['hung.cv5', 'hung.cv2']
  },
  {
    cardId: 0,
    id: 4,
    text: 'Project #2',
    start_date: '25-04-2018',
    due_time: '02-09-2018',
    duration: 10,
    order: 20,
    progress: 0,
    open: true,
    parent: 1,
    assigned: ['hung.cv1', 'hung.cv3']
  },
  {
    cardId: 0,
    id: 5,
    text: 'Project #3',
    start_date: '01-04-2018',
    due_time: '02-09-2018',
    duration: 18,
    order: 10,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 1,
    id: 6,
    text: 'Task #3',
    start_date: '02-05-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 10,
    progress: 0.5,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 1,
    id: 7,
    text: 'Task #4',
    start_date: '11-06-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 20,
    progress: 0.6,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 8,
    text: 'Project #4',
    start_date: '25-08-2018',
    due_time: '02-09-2018',
    duration: 10,
    order: 20,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 1,
    id: 10,
    text: 'Task #5',
    start_date: '02-06-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 10,
    progress: 0.2,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 1,
    id: 11,
    text: 'Task #6',
    start_date: '13-07-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 20,
    progress: 0.2,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 12,
    text: 'Project #5',
    start_date: '25-05-2018',
    due_time: '02-09-2018',
    duration: 10,
    order: 20,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 13,
    text: 'Project #6',
    start_date: '01-04-2018',
    due_time: '02-09-2018',
    duration: 18,
    order: 10,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 1,
    id: 14,
    text: 'Task #7',
    start_date: '02-07-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 10,
    progress: 0.6,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 1,
    id: 15,
    text: 'Task #8',
    start_date: '16-06-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 20,
    progress: 0.5,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 16,
    text: 'Project #7',
    start_date: '25-04-2018',
    due_time: '02-09-2018',
    duration: 10,
    order: 20,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 17,
    text: 'Project #8',
    start_date: '01-04-2018',
    due_time: '25-04-2018',
    duration: 18,
    order: 10,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 2,
    id: 18,
    text: 'End #1',
    start_date: '02-04-2018',
    due_time: '09-08-2018',
    duration: 8,
    order: 10,
    progress: 1,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 2,
    id: 19,
    text: 'End #2',
    start_date: '11-04-2018',
    due_time: '09-08-2018',
    duration: 8,
    order: 20,
    progress: 1,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 20,
    text: 'Project #9',
    start_date: '25-04-2018',
    due_time: '09-08-2018',
    duration: 10,
    order: 20,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 21,
    text: 'Project #10',
    start_date: '09-08-2018',
    due_time: '02-09-2018',
    duration: 18,
    order: 10,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 2,
    id: 22,
    text: 'End #3',
    start_date: '05-05-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 10,
    progress: 1,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 2,
    id: 23,
    text: 'End #4',
    start_date: '12-06-2018',
    due_time: '02-09-2018',
    duration: 8,
    order: 20,
    progress: 1,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 24,
    text: 'Project #11',
    start_date: '20-04-2018',
    due_time: '02-09-2018',
    duration: 10,
    order: 20,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
  {
    cardId: 0,
    id: 9,
    text: 'Project #12',
    start_date: '01-04-2018',
    due_time: '02-09-2018',
    duration: 18,
    order: 10,
    progress: 0,
    open: true,
    parent: 1,
    assigned: []
  },
];

export default data;