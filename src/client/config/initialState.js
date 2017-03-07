export const statusProps = {
  isSending: Boolean(),
  status: String(),
  statusCode: Number(Infinity)
};

export const commonModel = {
  counter: Number(),
  isApiResponding: {
    ...statusProps,
    value: Boolean()
  }
};

export const interviewModel = {
  todoList: Array()
};
