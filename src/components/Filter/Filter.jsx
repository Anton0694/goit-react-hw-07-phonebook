import { Input } from './Filter.styled'
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/filterSlice';
import {selectFilter} from '../redux/selectors'

export const Filter = () => {
  const dispatch = useDispatch();
  const defaultSelector = useSelector(selectFilter)

  return (
    <>
      <label htmlFor="search"> Find contacts by name: </label>
      <Input
        onChange={(e) => {
                  dispatch(setFilter(e.target.value));
              }}
        type="text"
        id="search"
        defaultValue={defaultSelector}
        
      />
      </>
      
  );
    
};
    


