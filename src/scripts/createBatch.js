export const createBatch = (
        dataLength,
        dataPizza,
        oldData,
        rowsPerPage,
        inicialIndex
    ) => {

    const dataTable = dataPizza;
    const newData = oldData;
    const temporalData = [];

    if(dataLength < 1) {
        return newData;
    }else {

        for(let i = inicialIndex; i < inicialIndex + rowsPerPage; i++ ) {
            if (!!dataTable[i]) {
                temporalData.push(dataTable[i]);
            }
        }

        let length = dataLength - rowsPerPage;

        newData.push(temporalData)

        return createBatch(
            length,
            dataTable,
            newData, 
            rowsPerPage, 
            inicialIndex + rowsPerPage - 1
        );

    }

}
