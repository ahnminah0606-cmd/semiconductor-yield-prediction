# MinahAhn

# ⚡ 반도체 공정 내 극단적 데이터 불균형 해결 및 센서 변수 최적화 수율 예측 프로젝트

## 📌 1. Project Overview
* **목표**: 실제 반도체 제조 공정의 대규모 센서 데이터 속에서 수율 저하를 일으키는 핵심 인자를 찾고, 불량 예측 정확도를 높이는 것.
* **배경**: 반도체 데이터는 불량률이 매우 낮아 모델 학습이 어렵다는 점에 착안, 이를 해결하기 위해 다양한 샘플링 기법과 변수 최적화를 적용해 보았습니다.

---

## 🛠 2. Technical Stack
* **Language**: Python
* **Library**: Pandas, NumPy, Scikit-learn, XGBoost, LightGBM
* **Environment**: Jupyter Notebook

---

## 📈 3. Key Results & Impact
* **데이터 불균형 극복**: 불량률이 매우 낮은 극단적인 환경에서 `SMOTE` 오버샘플링 기법을 적용하여 불량 검출 성능을 개선함.
* **핵심 변수 축소**: 수백 개의 센서 데이터 중 노이즈를 제거하고 유의미한 공정 인자를 추려내어 모델의 해석력을 높임.

---

## 🔍 4. Key Troubleshooting Steps
1. **Handling Class Imbalance (클래스 불균형 문제)**
   * *Problem*: 정상 데이터에 비해 불량 데이터가 지나치게 적어 모델이 정상 데이터만 편향해서 학습하는 문제가 발생함.
   * *Solution*: SMOTE 오버샘플링을 도입하여 데이터 밸런스를 조절하고, 평가 지표를 정밀하게 확인함.
2. **Feature Selection (고차원 센서 데이터 최적화)**
   * *Problem*: 수많은 센서 변수들로 인해 다중공선성이 생기고 모델이 무거워짐.
   * *Solution*: 분산이 거의 없는 불필요한 변수를 1차로 걸러내고, 중요도 기반으로 핵심 공정 인자를 압축함.
