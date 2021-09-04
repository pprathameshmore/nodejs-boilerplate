export const response = (response: {
    statusCode: number;
    status: string;
    success: boolean;
    message: string;
    data?: any;
}) => {
    return {
        statusCode: response.statusCode,
        status: response.status,
        success: response.success,
        message: response.message,
        data: response.data,
    };
};
