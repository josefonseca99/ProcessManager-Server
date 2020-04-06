  export function compareByMemUsage( a:any, b:any ) {

    if ( parseInt(a.memoryUsage.replace(/[. KB]/g,'')) > parseInt(b.memoryUsage.replace(/[. KB]/g,'')) ){
      return -1;
    }
    if ( parseInt(a.memoryUsage.replace(/[. KB]/g,'')) < parseInt(b.memoryUsage.replace(/[. KB]/g,'')) ){
      return 1;
    }
    return 0;
  }
      
  export function compareByCPUTime( a:any, b:any ) {

    if ( new Date('1970/01/01 '+a.cpuTime).getTime() > new Date('1970/01/01 '+b.cpuTime).getTime() ){
      return -1;
    }
    if ( new Date('1970/01/01 '+a.cpuTime).getTime() < new Date('1970/01/01 '+b.cpuTime).getTime() ){
      return 1;
    }
    return 0;
  }
