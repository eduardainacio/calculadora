<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Calculadora</title>

    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="topo">
        <button type="button" id="btnHistorico" onclick="abrirHistorico()">
            ☰ 
        </button>
    </div>

    <main class="container">

        <section class="calculadora">

            <div class="calculadora-body">

                <input type="text" id="display" readonly placeholder="0">

                <div class="botoes">

                    <!-- linha 1 -->
                    <button type="button" class="funcao" onclick="limparDisplay()">
                        CLR
                    </button>
                    <button type="button" class="funcao" onclick="apagarUltimo()">
                        DEL
                    </button>
                    <button type="button" onclick="adicionar('%')">
                        %
                    </button>
                    <button type="button" onclick="adicionar('/')">
                        /
                    </button>

                    <!-- linha 2 -->
                    <button type="button" onclick="adicionar('7')">
                        7
                    </button>
                    <button type="button" onclick="adicionar('8')">
                        8
                    </button>
                    <button type="button" onclick="adicionar('9')">
                        9
                    </button>
                    <button type="button" onclick="adicionar('*')">
                        ×
                    </button>

                    <!-- linha 3 -->
                    <button type="button" onclick="adicionar('4')">
                        4
                    </button>
                    <button type="button" onclick="adicionar('5')">
                        5
                    </button>
                    <button type="button" onclick="adicionar('6')">
                        6
                    </button>
                    <button type="button" onclick="adicionar('-')">
                        −
                    </button>

                    <!-- linha 4 -->
                    <button type="button" onclick="adicionar('1')">
                        1
                    </button>
                    <button type="button" onclick="adicionar('2')">
                        2
                    </button>
                    <button type="button" onclick="adicionar('3')">
                        3
                    </button>
                    <button type="button" onclick="adicionar('+')">
                        +
                    </button>

                    <!-- linha 5 -->
                    <button type="button" onclick="adicionar('.')">
                        .
                    </button>
                    <button type="button" onclick="adicionar('0')">
                        0
                    </button>

                    <!-- Botão de resultado -->
                    <button type="button" class="igual" onclick="calcular()">
                        =
                    </button>

                </div>

            </div>

        </section>

    </main>

    <!-- Painel do Histórico -->
    <aside id="historico">
        <div class="tituloHistorico">
            <h2>Histórico</h2>
            <button type="button" onclick="fecharHistorico()">
                ✕
            </button>
        </div>

        <div id="listaHistorico">

        </div>
    </aside>

    <!-- JavaScript -->
    <script src="js/script.js"></script>

</body>
</html>