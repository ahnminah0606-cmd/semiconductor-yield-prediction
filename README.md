# ⚡ 반도체 공정 내 극단적 데이터 불균형(Class Imbalance) 해결 및 양산기술 DMI 관점의 센서 차원 축소 수율 예측 프로젝트

## 📌 1. Project Overview
* **Goal**: 실제 반도체 제조 공정 내 대량의 결측치 및 극단적인 불균형 데이터 구조 하에서 수율(Yield) 저하를 일으키는 유의미한 센서 변수를 분류하고 예측 정확도를 확보합니다.
* **Target JD Alignment**: 삼성전자 메모리사업부 공정기술 (Spotfire 및 데이터 통계 분석 우대 요건 충족)

---

## 🛠 2. Technical Stack
<p>
  <img src="https://img.shields.io/badge/Python-3.8+-3776AB?style=flat-square&logo=Python&logoColor=white"/>
  <img src="https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=Pandas&logoColor=white"/>
  <img src="https://img.shields.io/badge/Scikit--Learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white"/>
  <img src="https://img.shields.io/badge/LightGBM-3776AB?style=flat-square&logo=lightgbm&logoColor=white"/>
</p>

---

## 📈 3. Key Results & Impact (성능 비교 시각화)

| 실험 차수 | 적용 알고리즘 | 전처리 및 샘플링 기법 | Recall (불량 검출률) | F1-Score | 비고 |
| :---: | :--- | :--- | :---: | :---: | :--- |
| **01** | XGBoost (Baseline) | 결측치 중앙값 대체 | 0.12 | 0.21 | 극단적 불균형으로 불량 검출 실패 |
| **02** | XGBoost + SMOTE | SMOTE 오버샘플링 적용 | 0.68 | 0.52 | 불량 검출력은 개선되었으나 정밀도 하락 |
| **03** | LightGBM + SMOTE | Variance Threshold 0.05 + SMOTE | **0.82** | **0.65** | 최종 챔버 불량 역추적 최적 모델 채택 |

---

## 🔍 4. Key Troubleshooting Steps
1. **Handling Class Imbalance**
   * *Problem*: 불량률 6% 미만의 극단적인 데이터 구조로 인해 모델이 정상 데이터만 편향 학습하는 현상 발생.
   * *Solution*: SMOTE 오버샘플링을 적용하여 Decision Boundary를 재조정하고 재현율(Recall) 지표 개선.
2. **Feature Selection**
   * *Problem*: 590개의 센서 데이터 중 다중공선성을 유발하는 노이즈 변수로 인해 모델 해석력 저하.
   * *Solution*: 분산 임계치(0.05)와 LightGBM Feature Importance를 융합하여 핵심 센서 35개 도출.

---

## 🚀 5. How to Run
```bash
pip install -r requirements.txt
python src/train_model.py
