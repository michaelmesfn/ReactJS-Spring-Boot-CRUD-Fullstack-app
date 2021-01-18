import axios from 'axios';

const CPU_API_BASE_URL = "http://localhost:8080/api/v1/cpus";

class CpuService {
    getCpus() {
        return axios.get(CPU_API_BASE_URL);
    }
    
    getCpuById(cpuId){
        return axios.get(CPU_API_BASE_URL + '/' + cpuId);
    }

    updateCpu(cpu, cpuId){
        return axios.put(CPU_API_BASE_URL + '/' + cpuId, cpu);
    }
}

export default new CpuService()