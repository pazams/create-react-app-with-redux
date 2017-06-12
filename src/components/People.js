import React, {PropTypes} from 'react';
import PeopleList from './PeopleList';
import PersonInput from './PersonInput';

const People = (props) => {

    const { people, addPerson } = props;

    return (
        <div>
        <PersonInput addPerson={addPerson} />
        <PeopleList people={people} />
        </div>
    );

}

People.propTypes = {
  people: PropTypes.array.isRequired,
  addPerson: PropTypes.func.isRequired,
};


export default People;
