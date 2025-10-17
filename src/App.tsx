/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { UserWarning } from './UserWarning';
import { USER_ID } from './api/todos';
import { UserTodos } from './components/UserTodos/UserTodos';

export const App: React.FC = () => {
  const userId = USER_ID;

  if (!userId) {
    return <UserWarning />;
  }

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">todos</h1>

      <div className="todoapp__content">
        <header className="todoapp__header">
          {/* this button should have `active` class only if all todos are completed */}
          <button
            type="button"
            className="todoapp__toggle-all active"
            data-cy="ToggleAllButton"
          />
        </header>

        <UserTodos userId={Number(userId)} />
      </div>
    </div>
  );
};
