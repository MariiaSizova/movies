 import _ from 'lodash';

 export function paginate (items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;

    // PAGINATION ON THE CLIENT SIZE
    //take all the items to the current page
    //(items) - convert to a lodash array 
    //value() - return back to the array
    return _(items).slice(startIndex).take(pageSize).value();
 }