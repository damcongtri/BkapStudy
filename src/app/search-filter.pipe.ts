import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchFilterPipe implements PipeTransform {

  transform(list: any[], keyword?: string): any[]{
  if(keyword){
    keyword==keyword.toLowerCase();
    return list.filter((data)=>{
      return data.description.toLowerCase().includes(keyword);
    })
  }
  else {
    return list;
  }
  } 
}


